import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import DynamoDBMapperService from '../service/dynamodb-mapper.service';
import ElasticBeanstalkAlarmEntity from '../entities/elastic-beanstalk-alarm.entity';
import { ElasticBeanstalkService } from '../service/elastic-beanstalk.service';


export const foo: Handler = async (event: APIGatewayEvent, context: Context) => {
  const ebService = new ElasticBeanstalkService();

  const environments = await ebService.getEnvironments('');

  const toSave = Object.assign(new ElasticBeanstalkAlarmEntity, { 
    id: '',
    environments
   });

  const mapper = await DynamoDBMapperService.getInstance();
  await mapper.put(toSave);

  for await (const foo of mapper.query(ElasticBeanstalkAlarmEntity, { id: '' })) {
    console.log(foo);
  }

  return { statusCode: 200, body: JSON.stringify({}) }
}