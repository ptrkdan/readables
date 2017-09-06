import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Post from './Post';
import Comment from './Comment';

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
          <Comment />
        </div>
      </div>
    )
  }
}

export default ViewPost;