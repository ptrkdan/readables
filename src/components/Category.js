import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Category extends Component {

  render() {
    const category = this.props.match.params.categoryName;
    return (
      <div className='category-page'>
        <Header category={category} />
        <div className='category-container container'>
          <div className='row justify-content-center'>
            <Link to={`/category/${category}/addpost/`}>
              <div className='add-post-btn btn col'>
                +Post
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;