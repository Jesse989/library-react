import React from 'react';
import { Link } from '@reach/router';
import { Message, Segment, Header, Container, Button, Icon, Image } from 'semantic-ui-react';
import screenShot from '../assets/lib_screen.png'

export default function About() {
  return (
    <div style={styles.container}>
    <Container textAlign='center'>
      <Segment>
      <Header as="h1">Personal Library App</Header>
        <Image centered bordered src={screenShot} size="medium"/>
        <Header as='h2'>
          Easily track the books you read, by creating notes and reviews for each book in your library.
        </Header>
        <Header as='p'>
          It's free AND easy to use. Get started now!
        </Header>
        <Button fluid as={Link} to="/signup" size='huge' style={styles.button}>
          <Icon name='lock' />
            Signup!
        </Button>
        <Message>
          <Container textAlign="center">
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
          </Container>
        </Message>
      </Segment>
    </Container>
    </div>
  )
}



const styles = {
  container: {
    margin: 'auto',
    maxWidth: 800,
    height: '100%',
    paddingTop: 16,
    paddingBottom: 16
  },
  button: {
    backgroundColor: '#D4C18F'
  },

}
