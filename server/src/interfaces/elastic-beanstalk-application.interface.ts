export interface ElasticBeanstalkApplication {
  applicationName: string;
  applicationArn: string;
  description: string;
  dateCreated: string;
  dateUpdated: string;
  versions: string[];
  configurationTemplates: string[]
}