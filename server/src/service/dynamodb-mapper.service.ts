import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper';
import ElasticBeanstalkAlarmEntity from '../entities/elastic-beanstalk-alarm.entity';

export default class DynamoDBMapperService {
  /** @property instance: Singleton instance of document client */
  private static instance: DynamoDBMapperService;

  /** @property client: Instance of AWS Mapping service */
  public readonly client: DataMapper;

  /** Private singleton constructor to force static instantiation */
  private constructor() {
    this.client = new DataMapper({
      client: new AWS.DynamoDB({
        region: 'localhost',
        endpoint: 'http://localhost:8000',
      })
    });
  }  

  /**
   * Public getter for singleton instance
   * @returns The static single instance of the service
   */
  public static async getInstance(): Promise<DataMapper> {

    /** Instantiate if null */
    if(!DynamoDBMapperService.instance) {
      DynamoDBMapperService.instance = new DynamoDBMapperService();

      const client = DynamoDBMapperService.instance.client;

      /** Ensure all tables exist */
      await client.ensureTableExists(ElasticBeanstalkAlarmEntity, {
        readCapacityUnits: 5,
        writeCapacityUnits: 4
      });
    }

    return DynamoDBMapperService.instance.client;
  }
}


