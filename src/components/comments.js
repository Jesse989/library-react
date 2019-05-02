import React from 'react';
import { Icon, Comment, Header } from 'semantic-ui-react';
import SubmitComment from '../containers/submit-comment';

export default function Comments({ comments, title, inLibrary }) {
  return (
    <Comment.Group style={styles.centered}>
      <Header as='h3' dividing>
        { inLibrary ? 'Notes' : 'Add to library to begin writing notes' }
      </Header>
      { inLibrary &&
        comments &&
        comments.map(comment => {
          const fDate = new Date(Date(comment.createdAt)).toLocaleString()
          return (
              <Comment key={ comment.id } comment={ comment }>
                  <Icon name='user' />
                <Comment.Metadata>{fDate}</Comment.Metadata>
                <Comment.Text>{comment.body}</Comment.Text>
              </Comment>
          )
        }
      )}
      { inLibrary && (
        <SubmitComment bookTitle={title} />
      )}
    </Comment.Group>
  )
}

const styles = {
  centered: {
    margin: '20px auto'
  }
}
