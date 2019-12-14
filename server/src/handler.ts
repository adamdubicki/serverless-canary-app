import { foo } from './cron/handler';
import { graphqlHandler } from './graphql/handler';

/** Bind handler to one export */
exports.foo = foo;
exports.graphqlHandler = graphqlHandler;