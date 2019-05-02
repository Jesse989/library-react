import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { CommentForm } from '../components';
import { Loader } from 'semantic-ui-react';
import { GET_BOOK_DETAILS } from '../pages/book';

export const ADD_COMMENT = gql`
  mutation AddComment($bookTitle: String!, $body: String!) {
    addComment(bookTitle: $bookTitle, body: $body) {
      message
      success
      comments {
        id
        body
      }
    }
  }
`;



export default function SubmitComment({ bookTitle }) {
  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={ADD_COMMENT}
          refetchQueries={[
            {
              query: GET_BOOK_DETAILS,
              variables: { bookTitle }
            },
          ]}
        >
          {(addComment, { loading, error }) => {
            if (loading) return <Loader />;
            if (error) return <p>error...</p>;

            return <CommentForm addComment={addComment} bookTitle={bookTitle} />
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
}
