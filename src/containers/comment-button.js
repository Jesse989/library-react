import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Button, Dimmer, Loader } from 'semantic-ui-react';


export const REMOVE_COMMENT = gql`
  mutation RemoveComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      success
      message
    }
  }
`;

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



export default function CommentButton({ body }) {
  return (
    <Mutation
      mutation={ADD_COMMENT}
      variables={{ body }}
    >
      {(addComment, { loading, error }) => {
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
              onClick={addComment}
              data-testid={'action-button'}
            >
              Add Comment
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
