import * as jwt from 'jsonwebtoken'
import {
  Context,
  CustomAuthorizerHandler,
  CustomAuthorizerEvent,
  CustomAuthorizerResult,
  Callback,
  PolicyDocument,
  Statement
} from 'aws-lambda'

import {
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_ISSUER,
  AUTH0_CLIENT_PUBLIC_KEY
} from './env';

export const isAuthorized = (groups: string, requiredGroup: string) => {
  return groups.indexOf(requiredGroup) !== -1;
}

// Policy helper function
const generatePolicy = (principalId: string, effect?: string, resource?: string): CustomAuthorizerResult => {
  const policyDocument: PolicyDocument = {
    Version: '2012-10-17',
    Statement: []
  };
  const authResponse: CustomAuthorizerResult = {
    principalId: principalId,
    policyDocument: policyDocument
  };
  if (effect && resource) {
    const statementOne: Statement = {
      Action: 'execute-api:Invoke',
      Effect: effect,
      Resource: resource
    };
    policyDocument.Statement.push(statementOne);
  }
  return authResponse;
};

// Reusable Authorizer function, set on `authorizer` field in serverless.yml
export const auth: CustomAuthorizerHandler = (event: CustomAuthorizerEvent, context: Context, callback: Callback<CustomAuthorizerResult>) => {
  console.log('event', event);
  if (!event.authorizationToken) {
    return callback('Unauthorized');
  }

  const tokenParts = event.authorizationToken.split(' ');
  const tokenValue = tokenParts[1];

  if (!(tokenParts[0].toLowerCase() === 'bearer' && tokenValue)) {
    // no auth token!
    return callback('Unauthorized');
  }

  decodeToken(tokenValue, (decoded) => {
    if (!decoded) {
      return callback('Unauthorized');
    }
    // is custom authorizer function
    const policy = generatePolicy(decoded.sub, 'Allow', event.methodArn);
    policy.context = {
      token: tokenValue
    };
    console.log('Returning policy', policy);
    return callback(null, policy);
  });
};

export const decodeToken = (token: string, callback: (decoded: { sub: string } | null) => void) => {
  const options = {
    audience: AUTH0_CLIENT_ID,
    issuer: AUTH0_ISSUER
  };

  try {
    jwt.verify(token, AUTH0_CLIENT_PUBLIC_KEY, options, (verifyError, decoded) => {
      if (verifyError || typeof (decoded) === 'string') {
        console.log('verifyError', verifyError || decoded);

        return callback(null);
      }

      console.log('Valid token', decoded);
      return callback(decoded as any);
    });
  } catch (err) {
    return callback(null);
  }
};
