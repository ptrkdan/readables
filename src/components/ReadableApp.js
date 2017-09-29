import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateCategories, populatePosts } from '../actions';
import { fetchCategories, fetchPosts } from '../utils/ReadableAPI';
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

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={MainView} />
            <Route exact path='/category/:categoryName' component={CategoryView} />
            <Route path='/addPost' component={AddPost} />
            <Route path='/editPost/:postId' component={EditPost} />
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
    populatePosts: (posts) => dispatch(populatePosts(posts))
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(App);
