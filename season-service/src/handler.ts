import * as AWS from 'aws-sdk';
import {
  APIGatewayProxyHandler
} from 'aws-lambda'
import { DB } from './DB';
import { validator } from './validator';
import { TSeason } from '../../types';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const create: APIGatewayProxyHandler = (event, context, callback) => {
  const db = new DB<TSeason>(dynamoDb, validator, "foobar");

  db.create(JSON.parse(event.body || '{}'), callback);
}

export const list: APIGatewayProxyHandler = (event, context, callback) => {
  const db = new DB<TSeason>(dynamoDb, validator, "foobar");

  db.list(callback);
}

export const get: APIGatewayProxyHandler = (event, context, callback) => {
  if (!event || !event.pathParameters) {
    callback();
    return;
  }
  const db = new DB<TSeason>(dynamoDb, validator, "foobar");

  db.get(event.pathParameters.id, callback);
}

export const update: APIGatewayProxyHandler = (event, context, callback) => {
  if (!event || !event.pathParameters) {
    callback();
    return;
  } const db = new DB<TSeason>(dynamoDb, validator, "foobar");

  db.update(event.pathParameters.id, JSON.parse(event.body || '{}'), callback);
}

export const remove: APIGatewayProxyHandler = (event, context, callback) => {
  if (!event || !event.pathParameters) {
    callback();
    return;
  }
  const db = new DB<TSeason>(dynamoDb, validator, "foobar");

  db.delete(event.pathParameters.id, callback);
}

// Public API
export const publicEndpoint: APIGatewayProxyHandler = (event, context, callback) => callback(null, {
  statusCode: 200,
  headers: {
    /* Required for CORS support to work */
    'Access-Control-Allow-Origin': '*',
    /* Required for cookies, authorization headers with HTTPS */
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    message: 'Hi ⊂◉‿◉つ from Public API',
  }),
});

// Private API
export const privateEndpoint: APIGatewayProxyHandler = (event, context, callback) => callback(null, {
  statusCode: 200,
  headers: {
    /* Required for CORS support to work */
    'Access-Control-Allow-Origin': '*',
    /* Required for cookies, authorization headers with HTTPS */
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    message: 'Hi ⊂◉‿◉つ from Private API. Only logged in users can see this',
    event,
    context
  }),
});