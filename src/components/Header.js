import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    let category = this.props.category;

    return (
      
        <div className='header row'>
          <h1 className='col'>
            <Link to='/'>
              Readable
            </Link>
            { category ? (
               <span style={{color: '#465D6F'}}> :: {category}</span>
            ) : null }
          </h1>
        </div>
    );
  }
}

export default Header;