export const tableName = process.env.DYNAMODB_TABLE || '';
export const stage = process.env.STAGE;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
export const AUTH0_ISSUER = process.env.AUTH0_ISSUER;
export const AUTH0_CLIENT_PUBLIC_KEY = process.env.AUTH0_CLIENT_PUBLIC_KEY || '';