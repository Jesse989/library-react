import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;



export const resolvers = {
  Query: {
    async isLoggedIn(_, __, { cache }) {
      return cache.data.isLoggedIn
    },
  }
}
