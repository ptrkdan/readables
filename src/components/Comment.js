import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comment extends Component {

  render() {
    return (
      <div className='comment'>
        <div className='row'>
          <div className='comment-body col-12'>I concur.</div>
        </div>
        <div className='row justify-content-between'>
          <div className='col align-self-center'>
            <span className='timestamp comment-timestamp'>17/09/06 09:18</span>
            <span className='author comment-author'>by Commenter</span>
            <span className='edit-link'> (<Link to='/editPost/1'>Edit</Link>)</span>
          </div>
          <div className='col-3'>
            <span className='btn vote-minus-btn'>-</span>
            <span className='vote-count comment-vote-count'> 1 </span>
            <span className='btn vote-plus-btn'>+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
