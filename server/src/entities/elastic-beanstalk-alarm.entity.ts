import {
  hashKey,
  table,
  attribute,
} from '@aws/dynamodb-data-mapper-annotations';
import { embed } from '@aws/dynamodb-data-mapper';
import { ElasticBeanstalkEnvironment } from '../interfaces/elastic-beanstalk-environment.interface';

/** DynamoDB attribute definition */
class Environment implements Partial<ElasticBeanstalkEnvironment> {
  @attribute()
  environmentName?: string;

  @attribute()
  health?: string
}

@table('elastic_beanstalk_alarm')
export default class ElasticBeanstalkAlarmEntity {
  @hashKey()
  id: string;

  @attribute({memberType: embed(Environment)})
  environments?: Partial<ElasticBeanstalkEnvironment>[]
}
