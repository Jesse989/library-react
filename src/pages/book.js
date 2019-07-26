import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { BOOK_TILE_DATA } from './books';
import { Dimmer, Loader, Header } from 'semantic-ui-react';
import { BookDetail, Comments, Error } from '../components';
import { ActionButton } from '../containers';

export const GET_BOOK_DETAILS = gql`
  query GetBookByTitle($bookTitle: String!) {
    bookByTitle(bookTitle: $bookTitle) {
      ...BookTile
    }
  }
  ${BOOK_TILE_DATA}
`;

export default function Book({ bookTitle }) {
  return (
    <Query query={GET_BOOK_DETAILS} variables={{ bookTitle }}>
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
          <div style={styles.centered}>
            <Header as="h2">{data.bookByTitle.title}</Header>
            <BookDetail {...data.bookByTitle} />
            <ActionButton {...data.bookByTitle} />
            <Comments {...data.bookByTitle} />
          </div>
        );
      }}
    </Query>
  );
}
const styles = {
  centered: {
    margin: '0 auto'
  }
};
