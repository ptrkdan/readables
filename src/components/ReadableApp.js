import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import Category from './Category';
import AddPost from './AddPost';
import ViewPost from './ViewPost';
import AddComment from './AddComment';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='container'>
          <Route exact path='/' component={CategoryList} />
          <Route exact path='/category/:categoryName' component={Category} />
          <Route path='/addPost' component={AddPost} />
          <Route path='/viewPost/:postId' component={ViewPost} />
          <Route path='/addComment' component={AddComment} />
        </div> 
      </div>
    );
  }
}

export default App;
