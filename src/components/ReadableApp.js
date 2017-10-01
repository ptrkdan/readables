import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateCategories,
         populatePosts,
         updatePost
       } from '../actions';
import { fetchCategories, 
         fetchPosts,
         fetchPost,
         addPost, 
         editPost, 
         updatePostVoteCount,
         addComment
       } from '../utils/ReadableAPI';
import { comparePosts } from '../utils/compareUtils';
import MainView from './MainView';
import CategoryView from './CategoryView';
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostView from './PostView';
import AddComment from './AddComment';

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

  addComment = (data) => {
    addComment(data);
  }

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
              (props) => <PostView updatePostVoteCount={this.updatePostVoteCount}  {...props} />
            } />
            <Route path='/addComment/:postId'  render={
              (props) => <AddComment addComment={this.addComment} {...props} />
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
    posts: posts.sort((a,b) => comparePosts(a, b, sort)),
    comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateCategories: (categories) => dispatch(populateCategories(categories)),
    populatePosts: (posts) => dispatch(populatePosts(posts)),
    updatePost: (post) => dispatch(updatePost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(App);
