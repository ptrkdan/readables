import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CategoryList extends Component {

  render() {
    const { categories, currCategory } = this.props;

    return (
      <ul className='category-list row justify-content-between'>
        {
          categories.length > 0 && (
            categories.map( category => 
              <li key={category.name} className={'category col-3' + (category.name === currCategory? ' active' : '')}>
                <Link to={`/${category.path}`}>
                  <div>{category.name}</div>
                </Link>
              </li>     
            )
          )
        }
      </ul>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps)(CategoryList);
