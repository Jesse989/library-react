import React, { Component } from 'react';

import { Form, TextArea, Button } from 'semantic-ui-react';

export default class CommentForm extends Component {
  state = {
    body: '' ,
  };

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(s => ({ [name]: value }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addComment({
      variables: {
        body: this.state.body,
        bookTitle: this.props.bookTitle
      }
    });
  }

  render() {
    return (
      <Form style={styles.form} reply onSubmit={this.onSubmit}>
        <TextArea name="body" onChange={this.onChange} />
        <Button basic color="blue" type="submit" content='Add Note' labelPosition='left' icon='edit' />
      </Form>
    );
  }
}


const styles = {
  form: {
    paddingBottom: 108
  }
}
