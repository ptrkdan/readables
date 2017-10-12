import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaUser,
         FaEdit, 
         FaTimesCircle, 
         FaCaretUp, 
         FaCaretDown 
       } from 'react-icons/lib/fa/';
import { deleteComment } from '../utils/ReadableAPI';
import { removeComment } from '../actions';



class Comment extends Component {

  deleteComment = (e) => {
    const { removeComment } = this.props;
    const commentId = e.target.id;
    deleteComment(commentId)
      .then(removeComment(commentId));
  };

  updateCommentVoteCount = (commentId, option) => {
    this.props.updateCommentVoteCount(commentId, option);
  }

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
            <span className='author comment-author'><FaUser /> {comment.author}</span>
            <span className='edit-link link'> | <FaEdit /> <span><Link to={`/editComment/${comment.id}`}>Edit</Link></span></span>
            <span className='delete-link link'> | <FaTimesCircle /> <span onClick={this.deleteComment} id={comment.id}>Delete</span></span>
          </div>
          <div className='col-3'>
            <span className='btn vote-minus-btn' onClick={() => this.updateCommentVoteCount(comment.id, 'downVote')}><FaCaretDown /></span>
            <span className='vote-count comment-vote-count'> {comment.voteScore} </span>
            <span className='btn vote-plus-btn' onClick={() => this.updateCommentVoteCount(comment.id, 'upVote')}><FaCaretUp /></span>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeComment: (commentId) => dispatch(removeComment(commentId))
  };
}

export default connect(null, mapDispatchToProps)(Comment);
