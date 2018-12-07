import * as AWS from 'aws-sdk';
import {
  APIGatewayProxyHandler
} from 'aws-lambda'
import { DB } from './DB';
import { validator } from './validator';
import { TTour } from '../../tour-types';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const create: APIGatewayProxyHandler = (event, context, callback) => {
  const db = new DB<TTour>(dynamoDb, validator, "foobar");

  db.create(JSON.parse(event.body || '{}'), callback);
}

export const list: APIGatewayProxyHandler = (event, context, callback) => {
  const db = new DB<TTour>(dynamoDb, validator, "foobar");

  db.list(callback);
}

export const get: APIGatewayProxyHandler = (event, context, callback) => {
  if (!event || !event.pathParameters) {
    callback();
    return;
  }
  const db = new DB<TTour>(dynamoDb, validator, "foobar");

  db.get(event.pathParameters.id, callback);
}

export const update: APIGatewayProxyHandler = (event, context, callback) => {
  if (!event || !event.pathParameters) {
    callback();
    return;
  } const db = new DB<TTour>(dynamoDb, validator, "foobar");

  db.update(event.pathParameters.id, JSON.parse(event.body || '{}'), callback);
}

export const remove: APIGatewayProxyHandler = (event, context, callback) => {
  if (!event || !event.pathParameters) {
    callback();
    return;
  }
  const db = new DB<TTour>(dynamoDb, validator, "foobar");

  db.delete(event.pathParameters.id, callback);
}