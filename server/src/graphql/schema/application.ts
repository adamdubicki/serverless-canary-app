import { ElasticBeanstalkService } from '../../service/elastic-beanstalk.service';

const eb = new ElasticBeanstalkService();

export const ApplicationTypeDef = `
  type Application {
    applicationName: String
    applicationArn: String
    description: String
    dateCreated: String
    dateUpdated: String
    versions: [String]
    configurationTemplates: [String]
    environments: [Environment]
  }
`

export const ApplicationResolvers = {
  environments: async (parentValue) => await eb.getEnvironments(parentValue.applicationName)
}