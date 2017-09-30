import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import CategoryList from './CategoryList';
import Post from './Post';

class CategoryView extends Component {

  render() {
    const category = this.props.match.params.categoryName;
    const { posts } = this.props;

    return (
      <div className='category-page'>
        <Header category={category} />
        <CategoryList />
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
            {
              posts.length > 0 && (
                posts.map( post => 
                  <Post key={post.id} post={post} />
                )
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  const category = ownProps.match.params.categoryName;
  return { 
    posts: posts.filter( post => post.category === category )
  };
}

export default connect(mapStateToProps)(CategoryView);