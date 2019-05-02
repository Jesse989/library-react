import React from 'react';
import { Item, Rating } from 'semantic-ui-react';

const BookDetail = ({ id, title, author, rating, img, published }) => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src={img} />
      <Item.Content>
        <Item.Meta>
          <span className='published'>Written in {published}</span>
        </Item.Meta>
        <Item.Description>by {author.name}</Item.Description>
        <Item.Description>
          <Rating icon='star' defaultRating={rating / 100} maxRating={5} />
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default BookDetail;
