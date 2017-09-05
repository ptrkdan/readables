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
        <div className="add-post">
          <form onSubmit={this.handleSubmit} id='add-post-form'>
            <div className='add-post-detail'>
              <ul>
                <li>
                  <h3>Title: <input id='add-post-detail-title' type='text' name='title' placeholder='Title' /></h3>
                </li>
                <li>
                  <textarea id='add-post-detail-body' type='text' name='body' defaultValue='Type post here.' />
                </li>
                <li>
                  Category: <select name='category' form='add-post-form'>
                    <option value={1}>Category #1</option>
                    <option value={2}>Category #2</option>
                    <option value={3}>Category #3</option>
                    <option value={4}>Category #4</option>
                  </select>
                </li>
                <li>
                  <button>Post</button>
                </li>
              </ul>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default AddPost;