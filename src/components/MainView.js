import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import CategoryList from './CategoryList';
import Post from './Post';

class MainView extends Component {

  render() {
    const { posts, updatePostVoteCount } = this.props;
    return (
      <div>
        <Header />
        <CategoryList />
        <div className='row justify-content-between'>
          <Link to='/addpost/'>
            <div className='add-post-btn btn col'>+Post</div>
          </Link>
          <div className='sort-control-btn btn col-2'>
            Sort
          </div>
        </div>
        <div className='post-list'>
        {
          posts.length > 0 && (
            posts.map( post => 
              <Post key={post.id} post={post} updatePostVoteCount={updatePostVoteCount}/>
            )
          )
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(MainView);