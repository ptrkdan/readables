import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class CategoryList extends Component {

  render() {
    return (
      <div>
        <Header />
        <ul className='category-list row'>
          <li className='category col'>
              <Link to='/category/1'>
                <div>Category-1</div>
              </Link>
          </li>
          <li className='category col'>
              <Link to='/category/2'>
                <div>Category-2</div>
              </Link>
          </li>
          <div className='w-100'></div>
          <li className='category col'>
              <Link to='/category/3'>
                <div>Category-3</div>
              </Link>
          </li>
          <li className='category col'>
              <Link to='/category/4'>
                <div>Category-4</div>
              </Link>
          </li>
          <div className='w-100'></div>
          <li className='category col'>
              <Link to='/category/5'>
                <div>Category-5</div>
              </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryList;