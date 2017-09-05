import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class CategoryList extends Component {

  render() {

    return (
      <div>
        <Header />
        <ul className='category-list row'>
          <li className='category col-3'>
              <Link to='/category/1'>
                <div>Category-1</div>
              </Link>
          </li>
          <li className='category col-3'>
              <Link to='/category/2'>
                <div>Category-2</div>
              </Link>
          </li>
          <li className='category col-3'>
              <Link to='/category/3'>
                <div>Category-3</div>
              </Link>
          </li>
          <li className='category col-3'>
              <Link to='/category/4'>
                <div>Category-4</div>
              </Link>
          </li>
        </ul>
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
    );
  }
}

export default CategoryList;