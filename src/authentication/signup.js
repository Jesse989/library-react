import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import SignupForm from './signup-form';
import { Loader } from 'semantic-ui-react';

import { navigate } from '@reach/router';

export const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $password: String!) {
    signup(email: $email, password: $password)
  }
`;

export default class Login extends React.Component {
  state = { error: '' }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={SIGNUP_USER}
            onCompleted={({ signup }) => {
              if (signup) {
                localStorage.setItem('token', signup);
                client.writeData({data: { isLoggedIn: true } });
                navigate('/');
              } else {
                this.setState(s => ({ error: 'That address is already in use'}))
              }
            }}
          >
            {(signup, { loading, error }) => {
              if (loading) return <Loader />;
              if (error) return <p>error...</p>;

              return <SignupForm signup={signup} error={this.state.error} />
            }}
          </Mutation>
        )}
      </ApolloConsumer>
    );
  }
}
