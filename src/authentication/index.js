import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Login from './login';
import Signup from './signup';
import About from './about';
import NotFound from './not-found';
import './auth.css'

export default function Authentication() {
  return (
    <div className="auth">
        <Router primary={false} component={Fragment}>
          <NotFound default />
          <About path='/' />
          <Login path='/login' />
          <Signup path='/signup' />
        </Router>
    </div>
  );
}
