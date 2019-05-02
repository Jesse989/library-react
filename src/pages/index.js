import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Search from './search';
import Book from './book';
import Books from './books';
import Library from './library';
import { Footer, PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Search path='/search' />
          <Books path='results/:query' />
          <Book path='book/:bookTitle' />
          <Library path="/" />
        </Router>
      </PageContainer>
      <Footer />
    </Fragment>
  );
}
