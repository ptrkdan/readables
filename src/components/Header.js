import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    const category = this.props.category;

    return (
      
        <div className='header row'>
          <h1 className='col'>
            <Link to='/'>
              Readable
            </Link>
            { category ? (
               <span> :: <Link to={`/category/${category}`}>{category}</Link></span>
            ) : null }
          </h1>
        </div>
    );
  }
}

export default Header;