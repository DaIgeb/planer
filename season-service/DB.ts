import { DynamoDB } from 'aws-sdk';
import * as uuid from 'uuid';

import { tableName } from './env';
import { Callback, APIGatewayProxyResult } from 'aws-lambda';

export type TValidator<TType> = (obj: TType) => string[];

export class DB<TType> {
  constructor(private db: DynamoDB.DocumentClient, private validate: TValidator<TType>, private userEmail: string) { }

  public get = (id: string, callback: Callback<APIGatewayProxyResult>) => {
    const params = {
      TableName: tableName,
      Key: {
        id
      }
    };

    this.db.get(params, (error, result) => {
      if (error) {
        console.error(error);
        callback(new Error('Couldn\'t fetch the tour item.'));
        return;
      }

      callback(null, this.createResponse(200, result.Item));
    });
  }

  public list = (callback: Callback<APIGatewayProxyResult>) => {
    const params: DynamoDB.DocumentClient.ScanInput = {
      TableName: tableName

    };

    this.db.scan(params, (error, result) => {
      if (error) {
        console.error(error);
        callback(new Error('Couldn\'t fetch the tours.'));
        return;
      }

      callback(null, this.createResponse(200, result.Items));
    });
  }

  public create = (data: TType, callback: Callback<APIGatewayProxyResult>) => {
    const timestamp = new Date().getTime();
    const item = {
      ...(data as any),
      id: uuid.v4(),
      user: this.userEmail,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    const validationErrors = this.validate(item);
    if (validationErrors && validationErrors.length > 0) {
      console.error('Validation Failed', validationErrors.join(','));
      callback(null, this.createResponse(403, validationErrors));
      return;
    }

    const params = {
      TableName: tableName,
      Item: item
    };

    this.db.put(params, (error, _) => {
      if (error) {
        console.error(error);
        callback(new Error('Couldn\'t create the tour item.'));
        return;
      }

      callback(null, this.createResponse(200, params.Item));
    });
  }

  public update = (id: string, data: TType, callback: Callback<APIGatewayProxyResult>) => {
    const timestamp = new Date().getTime();
    const item = {
      ...(data as any),
      id,
      updateAt: timestamp
    };
    const validationErrors = this.validate(item);
    if (validationErrors && validationErrors.length > 0) {
      console.error('Validation Failed', validationErrors.join(','));
      callback(null, this.createResponse(403, validationErrors));
      return;
    }

    const params = {
      TableName: tableName,
      Item: item
    };

    this.db.put(params, (error, _) => {
      if (error) {
        console.error(error);
        callback(new Error('Couldn\'t create the tour item.'));
        return;
      }

      callback(null, this.createResponse(200, params.Item));
    });
  }

  public delete = (id: string, callback: Callback<APIGatewayProxyResult>) => {
    const params = {
      TableName: tableName,
      Key: {
        id
      }
    };

    this.db.delete(params, (error, _) => {
      if (error) {
        console.error(error);
        callback(new Error('Couldn\'t delete the tour item.'));
        return;
      }

      callback(null, this.createResponse(200, {}));
    });
  }

  private createResponse(statusCode: number, body: any): APIGatewayProxyResult {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(body)
    }
  }
}