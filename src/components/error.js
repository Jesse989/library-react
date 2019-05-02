import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

export default function Error() {
  return (
    <Segment style={styles.container}>
      <Header as="h2">Oh no!</Header>
      <p>It looks like we are having trouble finding the information you requested.</p>
      <p>Check your internet connection and try again.</p>
    </Segment>
  )
}


const styles = {
  container: {
    margin: 'auto'
  }
}
