import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { BookTile, Error } from '../components';

import { Dimmer, Card, Header, Loader } from 'semantic-ui-react';

export const BOOK_TILE_DATA = gql`
  fragment BookTile on Book {
    __typename
    id
    img
    inLibrary
    author {
      name
    }
    title
    published
    rating
    comments {
      createdAt
      body
      id
    }
  }
`;

export const GET_BOOKS = gql`
  query SearchForBook($query: String!) {
    findBooks(query: $query) {
      books {
        ...BookTile
      }
    }
  }
  ${BOOK_TILE_DATA}
`;

export default function Books({ query }) {
  return (
    <Query query={GET_BOOKS} variables={{ query }}>
      {({ data, loading, error }) => {
        if (loading) {
          return (
            <Dimmer active>
              <Loader />
            </Dimmer>
          );
        }
        if (error) return <Error />;

        return (
          <Fragment>
            <Header style={styles.header} as="h2">
              Results for '{query}':
            </Header>
            <Card.Group divided style={styles.card}>
              {data.findBooks &&
                data.findBooks.books &&
                data.findBooks.books.map(book => (
                  <BookTile key={book.id} book={book} />
                ))}
            </Card.Group>
          </Fragment>
        );
      }}
    </Query>
  );
}

const styles = {
  card: {
    paddingBottom: 98
  },
  header: {
    paddingLeft: 8
  }
};
