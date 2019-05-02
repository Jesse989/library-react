import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Icon } from 'semantic-ui-react';
import { Link } from '@reach/router';

export default function LogoutButton() {
  return (
    <ApolloConsumer>
      {client => (
        <Link
          to="/"
          style={styles.link}
          onClick={() => {
            client.writeData({ data: { isLoggedIn: false } });
            localStorage.clear();
            client.resetStore();
          }}
        >
          <Icon size='large' name='sign-out' />Logout
        </Link>
      )}
    </ApolloConsumer>
  );
}


const styles = {
  link: {
    background: 'none',
    border: 'none',
    padding: 0,
    fontWeight: '700',
  }
}
