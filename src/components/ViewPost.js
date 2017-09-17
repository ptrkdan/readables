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
        <div className='comments-list'>
          <div className='row justify-content-between'>
            <Link to='/addcomment/'>
              <div className='add-comment-btn btn col'>+Comment</div>
            </Link>
            <div className='sort-control-btn btn col-1'>Sort</div>
          </div>
          <Comment />
          <Comment />
        </div>
      </div>

    )
  }
}

export default ViewPost;