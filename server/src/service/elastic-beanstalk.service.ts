import { ElasticBeanstalk } from "aws-sdk";
import { ElasticBeanstalkApplication } from '../interfaces/elastic-beanstalk-application.interface';
import { keysToLowerCamelCase } from '../utils';
import { ElasticBeanstalkEnvironment } from '../interfaces/elastic-beanstalk-environment.interface';

export class ElasticBeanstalkService {
  /** @property eb: An instance of the elastic beanstalk SDK */
  private readonly eb: ElasticBeanstalk;

  /** Private constructor, use init() */
  constructor() {
    this.eb = new ElasticBeanstalk()
  }

  async getApplications(): Promise<ElasticBeanstalkApplication[]> {
    const result = await this.eb.describeApplications().promise()
    return keysToLowerCamelCase(result.Applications);
  }

  async getEnvironments(applicationName: string): Promise<ElasticBeanstalkEnvironment[]> {
    const result = await this.eb.describeEnvironments({
        ApplicationName: applicationName
      })
      .promise()
    return keysToLowerCamelCase(result.Environments);
  }
}