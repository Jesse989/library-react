import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

export default class PageContainer extends Component {
  render() {
    return (
      <Container style={styles.outer}>
        <Grid verticalAlign="middle" centered>
          <Grid.Column style={styles.inner}>{this.props.children}</Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const styles = {
  outer: {
    minHeight: '100vh'
  },
  inner: {
    maxWidth: 550,
    margin: '14px auto'
  }
};
