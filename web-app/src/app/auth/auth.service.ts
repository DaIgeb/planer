import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { WebAuth, Auth0DecodedHash } from 'auth0-js';
import { AUTH_CONFIG, ENV } from './auth.config';
import { HttpRequest } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { MessageService } from '../core/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth0 = new WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: 'token id_token',
    redirectUri: AUTH_CONFIG.REDIRECT,
    audience: AUTH_CONFIG.AUDIENCE,
    scope: AUTH_CONFIG.SCOPE
  });
  accessToken: string;
  idToken: string;
  userProfile: any;
  isAdmin: boolean;
  expiresAt: number;
  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  loggingIn: boolean;

  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(private router: Router, private message: MessageService) {
    // If app auth token is not expired, request new token
    if (this.useExternalAuth()) {
      if (JSON.parse(localStorage.getItem('expires_at')) > Date.now()) {
        this.renewToken();
      }
    } else {
      this.setLoggedIn(true);
    }
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login() {
    // Auth0 authorize request
    if (this.useExternalAuth()) {
      this._auth0.authorize();
    }
  }

  handleAuth() {
    if (this.useExternalAuth()) {
      // When Auth0 hash parsed, get profile
      this._auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken) {
          window.location.hash = '';
          this._getProfile(authResult);
        } else if (err) {
          this._clearRedirect();
          this.router.navigate(['/']);
          console.error(`Error authenticating: ${err.error}`);
        }
        this.router.navigate(['/']);
      });
    }
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  private _getProfile(authResult: Auth0DecodedHash) {
    this.loggingIn = true;

    // Use access token to retrieve user's profile and set session
    this._auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
        this._redirect();
      } else if (err) {
        console.warn(`Error retrieving profile: ${err.error}`);
      }
    });
  }

  private _setSession(authResult: Auth0DecodedHash, profile?) {
    this.expiresAt = (authResult.expiresIn * 1000) + Date.now();
    // Store expiration in local storage to access in constructor
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.userProfile = profile;
    if (profile) {
      this.isAdmin = this._checkAdmin(profile);
    }
    // Update login status in loggedIn$ stream
    this.setLoggedIn(true);
    this.loggingIn = false;
  }

  private _clearExpiration() {
    // Remove token expiration from localStorage
    localStorage.removeItem('expires_at');
  }

  private _checkAdmin(profile) {
    // Check if the user has admin role
    const roles = profile['roles'] || [];
    return roles.indexOf('admin') > -1;
  }

  private _redirect() {
    const redirect = decodeURI(localStorage.getItem('authRedirect'));
    const navArr = [redirect || '/'];

    this.router.navigate(navArr);
    // Redirection completed; clear redirect from storage
    this._clearRedirect();
  }

  private _clearRedirect() {
    // Remove redirect from localStorage
    localStorage.removeItem('authRedirect');
  }

  logout() {
    // Remove data from localStorage
    this._clearExpiration();

    this._clearRedirect();

    if (this.useExternalAuth()) {
      // End Auth0 authentication session
      this._auth0.logout({
        clientID: AUTH_CONFIG.CLIENT_ID,
        returnTo: ENV.BASE_URI
      });
    }
  }

  get tokenValid(): boolean {
    if (this.useExternalAuth()) {
      // Check if current time is past access token's expiration
      return Date.now() < JSON.parse(localStorage.getItem('expires_at'));
    }

    return true;
  }

  renewToken() {
    if (this.useExternalAuth()) {
      // Check for valid Auth0 session
      this._auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken) {
          this._getProfile(authResult);
        } else {
          this._clearExpiration();
        }
      });
    }
  }

  private useExternalAuth = () => {
    return !environment.useLocal;
  }
}
