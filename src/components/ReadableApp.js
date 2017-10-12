import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateCategories,
         populatePosts,
         updatePost,
         updateComment
       } from '../actions';
import { fetchCategories, 
         fetchPosts,
         fetchPost,
         fetchComment,
         addPost, 
         editPost, 
         updatePostVoteCount,
         addComment,
         editComment,
         updateCommentVoteCount
       } from '../utils/ReadableAPI';
import { comparePosts, compareComments } from '../utils/compareUtils';
import MainView from './views/MainView';
import CategoryView from './views/CategoryView';
import AddPostView from './views/AddPostView';
import EditPostView from './views/EditPostView';
import PostView from './views/PostView';
import AddCommentView from './views/AddCommentView';
import EditCommentView from './views/EditCommentView';

class App extends Component {

  fetchCategories = (populateCategoriesFunc) => {
    fetchCategories()
      .then( categories => populateCategoriesFunc(categories) );
  };

  fetchPosts = (populatePostsFunc) => {
    fetchPosts()
      .then( posts => populatePostsFunc(posts) );
  };

  fetchPost = (updatePostFunc, postId) => {
    fetchPost(postId)
      .then( post => updatePostFunc(post));
  };

  fetchComment = (updateCommentFunc, commentId) => {
    fetchComment(commentId)
      .then( comment => updateCommentFunc(comment));
  }

  componentDidMount() {
    const { populateCategories, populatePosts } = this.props;
    this.fetchCategories(populateCategories);
    this.fetchPosts(populatePosts);
  }

  addPost = (data) => {
    const { populatePosts } = this.props;
    addPost(data);
    this.fetchPosts(populatePosts);
  };

  editPost = (data) => {
    const { populatePosts } = this.props;
    editPost(data);
    this.fetchPosts(populatePosts);
  };

  updatePostVoteCount = (id, vote) => {
    const { updatePost } = this.props;
    updatePostVoteCount(id, vote);
    this.fetchPost(updatePost, id);
  };

  updateCommentVoteCount = (id, vote) => {
    const { updateComment } = this.props;
    updateCommentVoteCount(id, vote);
    this.fetchComment(updateComment, id);
  };

  addComment = (data) => {
    addComment(data);
  };

  editComment = (data) => {
    editComment(data);
  };

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <Switch>
            <Route exact path='/' render={
              (props) => <MainView updatePostVoteCount={this.updatePostVoteCount} {...props} />
            } />
            <Route exact path='/:category' render={
              (props) => <CategoryView updatePostVoteCount={this.updatePostVoteCount} {...props} />
            } />
            <Route exact path='/:category/addpost/' render={ 
              (props) => <AddPostView addPost={this.addPost} {...props} />
            } />
            <Route path='/editPost/:postId' render={
              (props) => <EditPostView editPost={this.editPost} {...props} />
            } />
            <Route path='/:category/:postId' render={
              (props) => <PostView 
                            updatePostVoteCount={this.updatePostVoteCount}
                            updateCommentVoteCount={this.updateCommentVoteCount}
                            {...props} />
            } />
            <Route path='/addComment/:postId'  render={
              (props) => <AddCommentView addComment={this.addComment} {...props} />
            } />
            <Route path='/editComment/:commentId' render={
              (props) => <EditCommentView editComment={this.editComment} {...props} />
            } />
          </Switch>
        </div> 
      </div>
    );
  }
}

function mapStateToProps({ categories, posts, comments, sort }) {
  return { 
    categories, 
    posts: posts.sort((a,b) => comparePosts(a, b, sort.postSortMethod)),
    comments: comments.sort((a,b) => compareComments(a, b, sort.commentSortMethod))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateCategories: (categories) => dispatch(populateCategories(categories)),
    populatePosts: (posts) => dispatch(populatePosts(posts)),
    updatePost: (post) => dispatch(updatePost(post)),
    updateComment: (comment) => dispatch(updateComment(comment))
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(App);
