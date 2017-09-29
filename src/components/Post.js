import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
    const { post } = this.props;
    const timestamp = new Date(post.timestamp);
    return (
      <div className='post'>
        <div className='row'>
          <div className='post-category col'>
            >> <Link to={ `/category/${post.category}` }>{post.category}</Link>
          </div>
        </div>
        <div className='row justify-content-between'>
          <div className='post-title col-6'>
            <Link to={`/viewPost/${post.id}`}>{post.title}</Link>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='post-body col'>{post.body}</div>
        </div>
        <div className='row justify-content-between'>
          <div className='col align-self-center'>
            <span className='timestamp post-timestamp'>{timestamp.toLocaleString()}</span>
            <span className='author post-author'>by {post.author}</span>
            <span className='edit-link link'> (<span>Edit</span>)</span>
            <span className='delete-link link'> (<span onClick={this.deletePost} id={post.id}>Delete</span>)</span>
          </div>
          <div className='col-3'>
            <span className='btn vote-minus-btn'>-</span>
            <span className='vote-count post-vote-count'> {post.voteScore} </span>
            <span className='btn vote-plus-btn'>+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;