import { ElasticBeanstalk } from "aws-sdk";
import { keysToLowerCamelCase } from './../utils';

export class ElasticBeanstalkService {
  /** @property eb: An instance of the elastic beanstalk SDK */
  private readonly eb: ElasticBeanstalk;

  /** Private constructor, use init() */
  private constructor() {
    this.eb = new ElasticBeanstalk()
  }

  async getEnvironments(applicationName: string) {
    const result = await this.eb.describeEnvironments({
        ApplicationName: applicationName
      })
      .promise()
    return keysToLowerCamelCase(result.Environments);
  }

}