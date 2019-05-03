
import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { Container, Button, Form, Header, Message, Segment  } from 'semantic-ui-react';
import isEmail from 'isemail';


export default class SignupForm extends Component {
  state = {
    email: '' ,
    emailErr: '',
    password: '',
    passErr: '',
  };

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(s => ({ [name]: value }));
  };

  onSubmit = event => {
    event.preventDefault();
    // validate the form, set err text and early return if errs
    if (!isEmail.validate(this.state.email)) {
      return this.setState(s => ({ emailErr: `* That email adress doesn't look right`}) );
    } else {
      this.setState(s => ({ emailErr: ''}) );
    }
    if (this.state.password.length < 7) {
      return this.setState(s => ({ passErr: '* Password must contain at least 6 characters'}))
    } else {
      this.setState(s => ({ passErr: ''}) );
    }
    if (this.state.conditions === false) {
      return this.setState(s => ({ condErr: '* Please agree to the terms and conditions'}))
    } else {
      this.setState(s => ({ condErr: ''}))
    }
    if (this.state.emailErr.length || this.state.passErr.length) return;
    this.props.signup({
      variables: {
        email: this.state.email,
        password: this.state.password
      }
    });
  }

  render() {
    return (
      <Segment>
        <Header style={styles.header} as='h2' textAlign='center'>
           Remember which books you read and how they made you feel.
        </Header>
        <Form size='large' onSubmit={this.onSubmit}>
            <Form.Input
              error={this.state.emailErr ? true : false }
              style={styles.input}
              label="Email:"
              fluid
              name="email"
              icon='user'
              iconPosition='left'
              placeholder='Email address'
              data-testid="login-input"
              onChange={this.onChange}
            /><p style={styles.error}>{this.state.emailErr}</p>
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
            /><p style={styles.error}>{this.state.passErr}</p>

            <Button style={styles.button} fluid size='large' type="submit">
              Join Now
            </Button>
        </Form>
        <Container textAlign="center">
          <p style={styles.terms}>By clicking "Create Account", you agree to our <a>Terms & Conditions</a> and <a>Privacy Policy</a></p>
        </Container>
        { this.props.error && (
          <Container textAlign="center">
          <Message error>{this.props.error}</Message>
          </Container>
        )}
        <Message>
          <Container textAlign="center">
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
          </Container>
        </Message>
      </Segment>
    );
  }
}


const styles = {
  error: {
    color: '#9F3A38'
  },
  header: {
    paddingTop: 16
  },
  terms: {
    paddingTop: 10
  },
  button: {
    backgroundColor: '#D4C18F'
  }

}
