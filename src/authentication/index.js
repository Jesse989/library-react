import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Login from './login';
import Signup from './signup';
import About from './about';
import NotFound from './not-found';
import PageContainer from './page-container';
import './auth.css'

export default function Authentication() {
  return (
    <div className="auth">
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <NotFound default />
          <About path='/' />
          <Login path='/login' />
          <Signup path='/signup' />
        </Router>
      </PageContainer>
    </div>
  );
}
