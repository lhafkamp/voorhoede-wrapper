require('dotenv').config({ path: 'variables.env' })
const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const port = 'http://localhost:4000'

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers: Query,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

server.start(() => console.log(`Server is running on ${port}`))
