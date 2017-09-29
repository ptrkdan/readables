import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateCategories, populatePosts } from '../actions';
import { fetchCategories, fetchPosts, addPost,editPost } from '../utils/ReadableAPI';
import MainView from './MainView';
import CategoryView from './CategoryView';
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostView from './PostView';
import AddComment from './AddComment';

class App extends Component {

  componentDidMount() {
    const { populateCategories, populatePosts } = this.props;
    fetchCategories()
      .then( categories => populateCategories(categories) );
    fetchPosts()
      .then( posts => populatePosts(posts) );
  }

  addPost = (data) => {
    const { populatePosts } = this.props;
    addPost(data);
    fetchPosts()
      .then( posts => populatePosts(posts) );
  };

  editPost = (data) => {
    const { populatePosts } = this.props;
    editPost(data);
    fetchPosts()
      .then( posts => populatePosts(posts) );
  }

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={MainView} />
            <Route exact path='/category/:categoryName' component={CategoryView} />
            <Route path='/addPost' render={ 
              (props) => <AddPost addPost={this.addPost} {...props} />
            } />
            <Route path='/editPost/:postId' render={
              (props) => <EditPost editPost={this.editPost} {...props} />
            } />
            <Route path='/viewPost/:postId' component={PostView} />
            <Route path='/addComment' component={AddComment} />
          </Switch>
        </div> 
      </div>
    );
  }
}

function mapStateToProps({ categories, posts, comments }) {
  return { categories, posts, comments };
}

function mapDispatchToProps(dispatch) {
  return {
    populateCategories: (categories) => dispatch(populateCategories(categories)),
    populatePosts: (posts) => dispatch(populatePosts(posts)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(App);
