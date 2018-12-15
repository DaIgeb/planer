import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SeasonsComponent } from './seasons/seasons.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ToursComponent } from './tours/tours.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { httpInterceptorProviders } from './http-interceptors';
import { RefreshInterceptor } from './http-interceptors/refresh-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeasonComponent } from './season/season.component';
import { AddComponent } from './season/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsComponent,
    NavigationComponent,
    ToursComponent,
    CallbackComponent,
    DashboardComponent,
    SeasonComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    Title,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
