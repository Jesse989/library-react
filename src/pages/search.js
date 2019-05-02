import React from 'react';
import { navigate } from '@reach/router';
import { Form, Input, Header, Segment } from 'semantic-ui-react';


export default function Search() {
  let searchString = '';
  const handleChange = event => {
    searchString = event.target.value;
  }

  return (
    <Segment style={styles.container}>
    <Header as="h2">
      Search for books to add to your library.
    </Header>
    <div style={styles.searchBar}>
      <Form onSubmit={async event => {
        navigate(`results/${searchString}`);
      }}>
        <Form.Input
          label="Search by Author or Title:"
          fluid
          action={{ action: 'submit', icon: 'search' }}
          placeholder='Author or title'
          type='text'
          onChange={handleChange}
        />
      </Form>
    </div>
    </Segment>
  )
}

const styles = {
  searchBar: {
    minWidth: 260
  },
  container: {
    margin: '0 auto'
  },

}
