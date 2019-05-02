import React from 'react';

import { Link } from '@reach/router';
import { Image, Card, Rating } from 'semantic-ui-react';

export default ({ book }) => {
  const { title, author, published, rating, img, comments } = book;
  return (
    <Card style={styles.centered}>
      <Card.Content>
      <Image floated="left" size="mini" src={img} />
        <Card.Header>
          <Link to={`/book/${title}`}>{title}</Link>
        </Card.Header>
        <Card.Description>{author.name}</Card.Description>
        <Card.Meta><span className='published'>{published}</span></Card.Meta>
        <Rating icon='star' defaultRating={rating / 100} maxRating={5} />
      </Card.Content>
      <Card.Content extra>
        <Card.Description>
          Notes: { comments.length }
        </Card.Description>
        <Card.Meta>
          { comments && comments[0] ? 'Most recent:'   : ''}
        </Card.Meta>
        <Card.Description>
          { comments && comments[0] ? `"${comments[0].body}"` : ''}
        </Card.Description>
    </Card.Content>
  </Card>
  );
};

const styles = {
  centered: {
    margin: '10px auto',
  },

}
