import { ElasticBeanstalk } from 'aws-sdk';
import { keysToLowerCamelCase } from '../../utils';

const eb = new ElasticBeanstalk();

export const QueryTypeDef = `  
  type Query {
    applications: [Application]
    application(applicationName: String): Application
    environments(applicationName: String): [Environment]
  }
`

export const QueryResolvers = {
  applications: async () => {
    const result = await eb.describeApplications().promise();
    return keysToLowerCamelCase(result.Applications)
  },
  application: async(_parentValue, { applicationName }) => {
    const result = await eb.describeApplications().promise();
    const application = result.Applications.find(application => 
      application.ApplicationName === applicationName
    );
    return keysToLowerCamelCase(application)
  },
  environments: async(_parentValue, { applicationName }) => {
    const result =  await eb.describeEnvironments({
        ApplicationName: applicationName 
      })
      .promise();
    return keysToLowerCamelCase(result.Environments);
  }
}