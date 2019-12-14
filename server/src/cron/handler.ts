import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda';
import SlackService from '../service/slack.service';
import {
  attribute,
  hashKey,
  rangeKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations';

import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper';


const mapper = new DataMapper({
  client: new AWS.DynamoDB({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  })
});

@table('table_name')
class MyDomainObject {
  @hashKey()
  id: string;

  @rangeKey({defaultProvider: () => new Date()})
  createdAt: Date;

  @attribute()
  completed?: boolean;
}

export const foo: Handler = async (event: APIGatewayEvent, context: Context) => {
  const toSave = Object.assign(new MyDomainObject, {id: 'foo'});
  await mapper.put(toSave);
  for await (const foo of mapper.query(MyDomainObject, {id: 'foo'})) {
    console.log(foo);
  }

  return { statusCode: 200, body: JSON.stringify({}) }
}