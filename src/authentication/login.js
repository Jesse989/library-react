import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { navigate } from '@reach/router';

import LoginForm from './login-form';
import { Loader } from 'semantic-ui-react';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default class Login extends React.Component {
  state = { formError: '' };
  render() {
    return (
      <ApolloConsumer>
      {client => (
        <Mutation
        mutation={LOGIN_USER}
        onCompleted={({ login }) => {
          if (login) {
            localStorage.setItem('token', login);
            client.writeData({data: { isLoggedIn: true } });
            navigate('/');
          } else {
            this.setState(s => ({ formError: 'No account found with that email and password'}))
          }
        }}
        >
        {(login, { loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <p>error...</p>;

          return <LoginForm login={login} error={this.state.formError} />
        }}
        </Mutation>
      )}
      </ApolloConsumer>
    );

  }
}
