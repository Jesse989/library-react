
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class PageContainer extends Component {


  render() {
    return (
      <Grid verticalAlign='middle' centered style={{height: '100%'}}>
        <Grid.Column style={styles.inner} >
          { this.props.children }
        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {
  inner: {
    maxWidth: 550,
    margin: '14px'
  }
}
