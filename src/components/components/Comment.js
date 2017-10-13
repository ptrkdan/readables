import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { FaUser,
         FaEdit, 
         FaTimesCircle, 
         FaCaretUp, 
         FaCaretDown,
         FaCheck,
         FaClose
       } from 'react-icons/lib/fa/';
import { deleteComment } from '../../utils/ReadableAPI';
import { removeComment } from '../../actions';



class Comment extends Component {

  state = {
    isConfirmModalOpen: false
  };

  deleteComment = (commentId) => {
    const { removeComment } = this.props;
    deleteComment(commentId)
      .then(removeComment(commentId));
  };

  updateCommentVoteCount = (commentId, option) => {
    this.props.updateCommentVoteCount(commentId, option);
  };

  openConfirmModal = () => {
    this.setState({ isConfirmModalOpen: true });
  };

  closeConfirmModal = () => {
    this.setState({ isConfirmModalOpen: false });
  }

  render() {
    const { post, comment } = this.props;
    const timestamp = new Date(comment.timestamp);
    return (
      <div className='comment'>
        <div className='row'>
          <div className='comment-body col-12'>{comment.body}</div>
        </div>
        <hr />
        <div className='row justify-content-between'>
          <div className='col align-self-center comment-info'>
            <span className='timestamp comment-timestamp'>{timestamp.toLocaleString()}</span>
            <span className='author comment-author'><FaUser /> {comment.author}</span>
            <span className='edit-link link'> | <FaEdit /> <span><Link to={`/${post.category}/${post.id}/editComment/${comment.id}`}>Edit</Link></span></span>
            <span className='delete-link link'> | <FaTimesCircle /> <span onClick={this.openConfirmModal}>Delete</span></span>
          </div>
          <div className='col-2'>
            <span className='btn vote-minus-btn' onClick={() => this.updateCommentVoteCount(comment.id, 'downVote')}><FaCaretDown /></span>
            <span className='vote-count comment-vote-count'> {comment.voteScore} </span>
            <span className='btn vote-plus-btn' onClick={() => this.updateCommentVoteCount(comment.id, 'upVote')}><FaCaretUp /></span>
          </div>
        </div>
        <Modal
          isOpen={this.state.isConfirmModalOpen}
          contentLabel='Confirm Delete'
          className={{ base: 'confirm-delete-modal'}}
        >
          <h2>Are you sure you want to delete this comment?</h2>
          <ul>
            <li>
              <div className='btn' onClick={() => this.deleteComment(comment.id)}><FaCheck /></div>
            </li>
            <li>
              <div className='btn' onClick={this.closeConfirmModal}><FaClose /></div>
            </li>
          </ul>
        </Modal>
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
