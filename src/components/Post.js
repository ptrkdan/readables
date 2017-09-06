import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
    const category = this.props.category;
    return (
      <div className='post'>
        <div className='row'>
          { category ? (
              <div className='post-category col'>
                >> <Link to={ '/category/' + category }>{category}</Link>
              </div>
              ) : null
          }
        </div>
        <div className='row justify-content-between'>
          <div className='post-title col-6'>
            <Link to='/viewPost/1'>I am a Post.</Link>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='post-body col'>I post, therefore I am.</div>
        </div>
        <div className='row justify-content-between'>
          <div className='col'>
            <span className='timestamp post-timestamp'>17/09/06 09:15</span>
            <span className='author post-author'>by Poster</span>
          </div>
          <div className='col-3'>
            <span className='btn vote-minus-btn'>-</span>
            <span className='vote-count post-vote-count'> 2 </span>
            <span className='btn vote-plus-btn'>+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;