import React from 'react';

import LogoutButton from '../containers/logout-button';
import {
  Grid,
  Icon,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { Link } from '@reach/router';


const HorizontalSidebar = ({ animation, direction, visible }) => {

  return (
    <Sidebar style={styles.bar} as={Segment} animation={animation} direction={direction} visible={true}>
        <Grid textAlign='center'>
          <Grid columns={3} divided style={{maxWidth: '356px'}}>
            <Grid.Column>
            <Link style={styles.link} to="/search">
              <Icon size='large' name='search' />Search
            </Link>
            </Grid.Column>
            <Grid.Column>
            <Link style={styles.link} to="/">
              <Icon size='large' name='book' />Library
            </Link>
            </Grid.Column>
            <Grid.Column>
              <LogoutButton />
            </Grid.Column>
          </Grid>
        </Grid>
    </Sidebar>
  )
}


export default function Footer({ type }) {
  return (
    <HorizontalSidebar
      animation={'push'}
      direction={'bottom'}
      visible={'visible'}
    />
  );
}

const styles = {
  link: {
    textDecoration: 'none',
    fontWeight: '700',
  },
  bar: {
    backgroundColor: '#D4C18F'
  }
}
