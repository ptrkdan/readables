import React, { Component } from 'react';
import Header from './Header';

class AddPost extends Component {

  render() {
    const category= this.props.match.params.categoryName;
    return (
      <div>
        <Header category={category} />
        Add Post Page
      </div>
    );
  }
}

export default AddPost;