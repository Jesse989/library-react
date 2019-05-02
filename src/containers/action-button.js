import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { GET_BOOK_DETAILS } from '../pages/book';
import { BOOK_TILE_DATA } from '../pages/books';
import { GET_MY_BOOKS } from '../pages/library';

import { Button, Dimmer, Loader } from 'semantic-ui-react';

export { GET_BOOK_DETAILS };

export const REMOVE_BOOK = gql`
  mutation RemoveBookFromUser($bookTitle: String!) {
    removeBook(bookTitle: $bookTitle) {
      success
      message
      books {
        ...BookTile
      }
    }
  }
  ${BOOK_TILE_DATA}
`;

export const ADD_BOOK = gql`
  mutation AddBookToUser($bookTitle: String!) {
    addBook(bookTitle: $bookTitle) {
      message
      success
      books {
        ...BookTile
      }
    }
  }
  ${BOOK_TILE_DATA}
`;



export default function ActionButton({ inLibrary, title }) {
  return (
    <Mutation
      mutation={inLibrary ? REMOVE_BOOK : ADD_BOOK}
      variables={{ bookTitle: title }}
      refetchQueries={[
        {
          query: GET_MY_BOOKS,
        },
      ]}
    >
      {(mutate, { loading, error }) => {
        if (loading) {
          return (
            <Dimmer active>
              <Loader />
            </Dimmer>
          )
        }
        if (error) return <p>error...</p>;

        return (
          <div>
            <Button
              onClick={mutate}
              basic
              color={inLibrary
                ? 'red'
                : 'green'}

            >
              {inLibrary
                ? 'Remove from Library'
                : 'Add to Library'}
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
