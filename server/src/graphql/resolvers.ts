import { 
  QueryResolvers,
  ApplicationResolvers,
  EnvironmentResolvers
} from './schema';

/** Combine all the resolvers into a single object */
export const resolvers = {
  Query: QueryResolvers,
  Application: ApplicationResolvers,
  Environment: EnvironmentResolvers
};