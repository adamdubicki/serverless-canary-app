import { keysToLowerCamelCase } from '../../utils';
import { ElasticBeanstalkService } from '../../service/elastic-beanstalk.service';

const eb = new ElasticBeanstalkService();

export const QueryTypeDef = `  
  type Query {
    applications: [Application]
    application(applicationName: String): Application
    environments(applicationName: String): [Environment]
  }
`

export const QueryResolvers = {
  applications: async () => await eb.getApplications(),
  environments: async(_parentValue, { applicationName }) => await eb.getEnvironments(applicationName),
  application: async(_parentValue, { applicationName }) => {
    const result = await eb.getApplications();

    const application = result.find(application => 
      application.applicationName === applicationName
    );

    return application;
  },
}