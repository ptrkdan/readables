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
            <Link to='/addpost/'>
              <div className='add-post-btn btn col'>
                +Post
              </div>
            </Link>
          </div>
          <div className='post-list'>
            <div className='post'>
              <div className='post-title'>I am a Post.</div>
              <div className='post-body'>I post, therefore I am.</div>
              <div className='post-author'>- Poster</div>
            </div>
            <div className='post'>
              <div className='post-title'>I am a Post.</div>
              <div className='post-body'>I post, therefore I am.</div>
              <div className='post-author'>- Poster</div>
            </div>
            <div className='post'>
              <div className='post-title'>I am a Post.</div>
              <div className='post-body'>I post, therefore I am.</div>
              <div className='post-author'>- Poster</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;