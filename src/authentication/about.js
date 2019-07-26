import React from 'react';
import { Link } from '@reach/router';
import {
  Message,
  Segment,
  Header,
  Container,
  Button,
  Icon,
  Image
} from 'semantic-ui-react';
import screenShot from '../assets/lib_screen.png';

export default function About() {
  return (
    <Segment>
      <Header textAlign="center" as="h1">
        Personal Library App
      </Header>
      <Image centered bordered src={screenShot} size="medium" />
      <Header textAlign="center" as="h2">
        Easily track the books you read, by creating notes and reviews for each
        book in your library.
      </Header>
      <Header textAlign="center" as="p">
        It's free AND easy to use. Get started now!
      </Header>
      <Button fluid as={Link} to="/signup" size="huge" style={styles.button}>
        <Icon name="lock" />
        Signup!
      </Button>
      <Message>
        <Container textAlign="center">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </Container>
      </Message>
    </Segment>
  );
}

const styles = {
  button: {
    backgroundColor: '#D4C18F'
  }
};
