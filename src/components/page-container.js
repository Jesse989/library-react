import React, { Fragment } from 'react';

export default function PageContainer(props) {
  return (
    <Fragment>
      <div style={styles.bar}></div>
      <div style={styles.container}>{props.children}</div>
    </Fragment>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    maxWidth: 650,
    margin: '0 auto',
    padding: 24,
    paddingBottom: 40,
  },
  bar: {
    flexShrink: 0,
    height: 12,
    backgroundColor: '#D4C18F',
  }

}
