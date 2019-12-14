import { ApolloServer, makeExecutableSchema } from 'apollo-server-lambda';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  tracing: true,
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
  },
});