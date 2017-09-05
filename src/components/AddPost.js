import React, { Component } from 'react';
import Header from './Header';
import serializeForm from 'form-serialize';

class AddPost extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const value = serializeForm(event.target, {hash: true});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="subheader">

          <form onSubmit={this.handleSubmit} id='add-post-form'>
            <div className='add-post-detail'>
              <input type='text' name='title' placeholder='Title' />
              <input type='text' name='body' placeholder='Type post here.' />
              <button>Post</button>
            </div>
          </form>

          <span>Category:
            <select name='category' form='add-post-form'>
              <option value={1}>Category #1</option>
              <option value={2}>Category #2</option>
              <option value={3}>Category #3</option>
              <option value={4}>Category #4</option>
            </select>
          </span>

        </div>
      </div>
    );
  }
}

export default AddPost;