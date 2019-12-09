import { APIGatewayEvent, Context } from 'aws-lambda';
import { ElasticBeanstalk } from 'aws-sdk';
import * as util from 'util';


const eb = new ElasticBeanstalk();

type LambdaHandler = (event: APIGatewayEvent, context: Context) => Promise<LambdaResponse>;
type LambdaResponse = { statusCode: number, body: string }

export const helloWorld: LambdaHandler = async (event: APIGatewayEvent, context: Context):Promise<LambdaResponse> => {
  const result = await new Promise((resolve, reject) => eb.describeEnvironments({
    ApplicationName: event.pathParameters.application
  }, function(err, data) {
    if (err) { 
      console.log(err);
      reject(Error);
    }
    else {
      console.log(data);
      resolve(data);
    }
  }));

  const response = {
    statusCode: 200,
    body: JSON.stringify({ result })
  }
  
  return response
}