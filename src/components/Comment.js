import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const { comment } = this.props;
    const timestamp = new Date(comment.timestamp);
    return (
      <div className='comment'>
        <div className='row'>
          <div className='comment-body col-12'>{comment.body}</div>
        </div>
        <div className='row justify-content-between'>
          <div className='col align-self-center'>
            <span className='timestamp comment-timestamp'>{timestamp.toLocaleString()}</span>
            <span className='author comment-author'>by {comment.author}</span>
            <span className='edit-link link'> (<span>Edit</span>)</span>
            <span className='delete-link link'> (<span onClick={this.deleteComment} id={comment.id}>Delete</span>)</span>
          </div>
          <div className='col-3'>
            <span className='btn vote-minus-btn'>-</span>
            <span className='vote-count comment-vote-count'> {comment.voteScore} </span>
            <span className='btn vote-plus-btn'>+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
