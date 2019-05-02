
import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import {Query, ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';

import Pages from './pages';
import Authenticate from './authentication';
import {typeDefs, resolvers} from './resolvers';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const httpLink = createHttpLink({
  uri: 'https://library-apollo.herokuapp.com/graphql',
})

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : "none",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  typeDefs,
  resolvers
});

client.cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
  },
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN}>
      {({data}) => ( data && data.isLoggedIn ? <Pages /> : <Authenticate />)}
    </Query>
  </ApolloProvider>,
  document.getElementById('root'),
);
