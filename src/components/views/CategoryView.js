import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import Post from '../components/Post';
import PostSortControl from '../sort-controls/PostSortControl';

class CategoryView extends Component {

  render() {
    const category = this.props.match.params.categoryName;
    const { posts, updatePostVoteCount } = this.props;

    return (
      <div className='category-page'>
        <Header category={category} />
        <CategoryList currCategory={category} />
        <div className='category-container container'>
          <div className='row justify-content-between'>
            <Link to='/addpost/'>
              <div className='add-post-btn btn col'>
                +Post
              </div>
            </Link>
            <PostSortControl />
          </div>
          <div className='post-list'>
            {
              posts.length > 0 && (
                posts.map( post => 
                  <Post key={post.id} post={post} updatePostVoteCount={updatePostVoteCount} />
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