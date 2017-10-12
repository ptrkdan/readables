import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchComments } from '../../utils/ReadableAPI';
import { populateComments } from '../../actions';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import Post from '../components/Post';
import Comment from '../components/Comment';
import CommentSortControl from '../sort-controls/CommentSortControl';

class ViewPost extends Component {

  componentDidMount() {
    fetchComments(this.props.match.params.postId)
      .then(comments => this.props.populateComments(comments));
  }

  render() {
    const { posts, comments, updatePostVoteCount, updateCommentVoteCount } = this.props;

    if (posts[0]) {
      const post = posts[0];
      return (
        <div>
          <Header category={post.category} />
          <CategoryList />
          <Post key={post.id} post={post} updatePostVoteCount={updatePostVoteCount} />
          <div className='comments-list'>
            <div className='row justify-content-between'>
              <Link to={`/addcomment/${post.id}`}>
                <div className='add-comment-btn btn col'>+Comment</div>
              </Link>
              <CommentSortControl />
            </div>
            {
              comments.length > 0 && (
                comments.map( comment =>
                  <Comment key={comment.id} comment={comment} 
                    updateCommentVoteCount={updateCommentVoteCount} />
                )
              )
            }
          </div>
        </div>
      )
    } else {
      return <Redirect push to='/' />;
    }
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  const postId = ownProps.match.params.postId;
  return { 
    posts: posts.filter( post => post.id === postId ),
    comments: comments.filter( comment => comment.parentId === postId )
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateComments: (comments) => dispatch(populateComments(comments))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);