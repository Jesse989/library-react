import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Link } from '@reach/router';

export default function NotFound() {
  return (
    <Segment>
      <Header as="h1">404 - Page not found</Header>
      <Header as="h2">Uh oh.</Header>
      <Header as="h3">The page you requested could not be found.</Header>
      <p>The page you requested could not be found. Is there any chance you were looking for one of these?</p>
      <Link to="/">Head back to the welcome page.</Link>
      <br />
      <Link to="/login">Check out the login page.</Link>
    </Segment>
  )
}
