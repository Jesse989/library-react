
import React, { Component, Fragment } from 'react';
import PageContainer from './page-container';
import { Link } from '@reach/router';
import { Container, Button, Form, Header, Message, Segment  } from 'semantic-ui-react';

export default class LoginForm extends Component {
  state = {
    email: '' ,
    password: '',
  };

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(s => ({ [name]: value }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login({
      variables: {
        email: this.state.email,
        password: this.state.password
      }
    });
  }

  render() {
    return (
      <PageContainer>
      <Segment style={styles.container}>
        <Header style={styles.header} as='h2' textAlign='center'>
           Login to your account
        </Header>
        <Form size='large' onSubmit={this.onSubmit}>
            <Form.Input
              style={styles.input}
              label="Email:"
              fluid
              name="email"
              icon='user'
              iconPosition='left'
              placeholder='Email address'
              data-testid="login-input"
              onChange={this.onChange}
            />
            <Form.Input
              style={styles.input}
              label="Password:"
              fluid
              name="password"
              icon='lock'
              iconPosition='left'
              placeholder='At least 6 characters'
              type='password'
              data-testid="password-input"
              onChange={this.onChange}
            />

            <Button style={styles.button} fluid size='large' type="submit">
              Login
            </Button>
        </Form>
        { this.props.error && (
          <Container textAlign="center">
          <Message error>{this.props.error}</Message>
          </Container>
        )}
        <Message>
        <Container textAlign="center">
        Need an account? <Link to='/signup'>Sign up</Link>
        </Container>
        </Message>
        </Segment>
      </PageContainer>
    );
  }
}

const styles = {
  header: {
    paddingTop: 16
  },
  button: {
    backgroundColor: '#D4C18F'
  }


}
