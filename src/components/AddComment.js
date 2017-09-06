import React, { Component } from 'react';
import Header from './Header';

class AddComment extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="add-comment">
          <form onSubmit={this.handleSubmit} id='add-comment-form'>
            <div className='add-comment-detail'>
              <ul>
                <li>
                  <span><h4>Author: <input id='add-comment-detail-author' type='text' name='author' /></h4></span>
                </li>
                <li>
                  <textarea id='add-comment-detail-body' type='text' name='body' defaultValue='Type comment here.' />
                </li>
                <li>
                  <button className='btn'>Post</button>
                </li>
              </ul>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default AddComment;