import { ElasticBeanstalk } from "aws-sdk";
import { GraphQLSchema } from './graphql-schema.interface';
import { keysToLowerCamelCase, StaticImplements } from '../../utils';

const eb = new ElasticBeanstalk();

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
  environments: async (parentValue) => {
    const result = await eb.describeEnvironments({
      ApplicationName: '' 
    })
    .promise();
    return keysToLowerCamelCase(result.Environments);
  } 
}

@StaticImplements<GraphQLSchema>()
export class Application {
  static typedef = `
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
  `;

  static resolvers = {
    environments: async (parentValue) => {
      const result = await eb.describeEnvironments({
        ApplicationName: parentValue.applicationName 
      })
      .promise();
      return keysToLowerCamelCase(result.Environments);
    } 
  }
}