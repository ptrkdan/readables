import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Post from './Post';

class ViewPost extends Component {

  render() {
    const category = "1";
    return (
      <div>
        <Header category={category} />
        <Post category={category} />
        <div className='comment-list'>
          <div className='row'>
            <Link to='/addcomment/'>
              <div className='add-comment-btn btn col-3'>+Comment</div>
            </Link>
          </div>
          <div className='comment row'>
            <div className='comment-body col-12'>I concur.</div>
            <div className='author comment-author'>- Commenter</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewPost;