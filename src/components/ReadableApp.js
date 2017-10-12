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
import MainView from './MainView';
import CategoryView from './CategoryView';
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostView from './PostView';
import AddComment from './AddComment';
import EditComment from './EditComment';

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
            <Route exact path='/category/:categoryName' render={
              (props) => <CategoryView updatePostVoteCount={this.updatePostVoteCount} {...props} />
            } />
            <Route path='/addPost' render={ 
              (props) => <AddPost addPost={this.addPost} {...props} />
            } />
            <Route path='/editPost/:postId' render={
              (props) => <EditPost editPost={this.editPost} {...props} />
            } />
            <Route path='/viewPost/:postId' render={
              (props) => <PostView 
                            updatePostVoteCount={this.updatePostVoteCount}
                            updateCommentVoteCount={this.updateCommentVoteCount}
                            {...props} />
            } />
            <Route path='/addComment/:postId'  render={
              (props) => <AddComment addComment={this.addComment} {...props} />
            } />
            <Route path='/editComment/:commentId' render={
              (props) => <EditComment editComment={this.editComment} {...props} />
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
