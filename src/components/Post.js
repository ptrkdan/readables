import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaUser,
         FaCommentsO,
         FaEdit, 
         FaTimesCircle, 
         FaCaretUp, 
         FaCaretDown 
       } from 'react-icons/lib/fa/';
import { deletePost, fetchComments } from '../utils/ReadableAPI';
import { removePost } from '../actions';

class Post extends Component {

  state = {
    commentCount: 0
  };

  deletePost = (e) => {
    const { removePost } = this.props;
    const postId = e.target.id;
    deletePost(postId)
      .then(removePost(postId));
  };

  updatePostVoteCount = (postId, option) => {
    this.props.updatePostVoteCount(postId, option);
  }

  componentDidMount() {
    fetchComments(this.props.post.id)
      .then(comments => this.setState({ commentCount: comments.length }));
  }

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
          <div className='col align-self-center post-info'>
            <span className='timestamp post-timestamp'>{timestamp.toLocaleString()}</span>
            <span className='author post-author'><FaUser /> {post.author}</span>
            <span className='comment-count'> | <FaCommentsO /> {this.state.commentCount}</span>
            <span className='edit-link link'> | <FaEdit /> <span><Link to={`/editPost/${post.id}`}>Edit</Link></span></span>
            <span className='delete-link link'> | <FaTimesCircle /> <span onClick={this.deletePost} id={post.id}>Delete</span></span>
          </div>
          <div className='col-3'>
            <span className='btn vote-minus-btn' onClick={() => this.updatePostVoteCount(post.id, 'downVote')}><FaCaretDown /></span>
            <span className='vote-count post-vote-count'> {post.voteScore} </span>
            <span className='btn vote-plus-btn' onClick={() => this.updatePostVoteCount(post.id, 'upVote')}><FaCaretUp /></span>
          </div>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    removePost: (posts) => dispatch(removePost(posts))
  };
}

export default connect(null, mapDispatchToProps)(Post);
