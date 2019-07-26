import React, { Fragment } from 'react';
import { Dimmer, Loader, Header, Card } from 'semantic-ui-react';
import { BookTile, Error } from '../components';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { BOOK_TILE_DATA } from './books';

export const GET_MY_BOOKS = gql`
  query GetMyBooks {
    me {
      books {
        ...BookTile
      }
    }
  }
  ${BOOK_TILE_DATA}
`;

export default function Library() {
  return (
    <Query query={GET_MY_BOOKS}>
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
              My library:
            </Header>
            <Card.Group divided style={styles.card}>
              {data.me && data.me.books.length ? (
                data.me.books.map(book => (
                  <BookTile key={book.id} book={book} />
                ))
              ) : (
                <p>You haven't saved any books yet</p>
              )}
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
