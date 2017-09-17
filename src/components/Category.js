import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Post from './Post';

class Category extends Component {

  render() {
    const category = this.props.match.params.categoryName;
    return (
      <div className='category-page'>
        <Header category={category} />
        <div className='category-container container'>
          <div className='row justify-content-between'>
            <Link to='/addpost/'>
              <div className='add-post-btn btn col'>
                +Post
              </div>
            </Link>
            <div className='sort-control-btn btn col-2'>
              Sort
            </div>
          </div>
          <div className='post-list'>
            <Post category={category} />
            <Post category={category} />
            <Post category={category} />
            <Post category={category} />
            <Post category={category} />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;