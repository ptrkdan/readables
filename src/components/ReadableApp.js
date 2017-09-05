import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import Category from './Category';
import AddPost from './AddPost';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='container'>
          <Route exact path='/' component={CategoryList} />
          <Route exact path='/category/:categoryName' component={Category} />
          <Route path='/addPost' component={AddPost} />
        </div> 
      </div>
    );
  }
}

export default App;
