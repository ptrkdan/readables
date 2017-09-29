import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../utils/ReadableAPI';
import { removePost } from '../actions';

class Post extends Component {

  deletePost = (e) => {
    const { removePost } = this.props;
    const postId = e.target.id;
    deletePost(postId)
      .then(removePost(postId));
  };

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
          <div className='post-title col'>
            <Link to={`/viewPost/${post.id}`}>{post.title}</Link>
          </div>
        </div>
        <div className='row'>
          <div className='post-body col'>{post.body}</div>
        </div>
        <hr />
        <div className='row justify-content-between'>
          <div className='col align-self-center'>
            <span className='timestamp post-timestamp'>{timestamp.toLocaleString()}</span>
            <span className='author post-author'>by {post.author}</span>
            <span className='edit-link link'> (<Link to={`/editPost/${post.id}`}>Edit</Link>)</span>
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

function mapStateToProps({ posts }) {
  return { posts };
}

function mapDispatchToProps(dispatch) {
  return {
    removePost: (posts) => dispatch(removePost(posts))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
