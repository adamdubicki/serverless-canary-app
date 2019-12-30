import { 
  QueryTypeDef,
  ApplicationTypeDef,
  EnvironmentTypeDef
} from '../graphql/schema';

/**
 * Combine all type definitions into single string
 */
const typeDefs = `
  ${QueryTypeDef}
  ${EnvironmentTypeDef}
  ${ApplicationTypeDef}
`

export { typeDefs }