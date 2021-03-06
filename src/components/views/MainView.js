import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import Post from '../components/Post';
import PostSortControl from '../sort-controls/PostSortControl';

class MainView extends Component {

  render() {
    const { posts, updatePostVoteCount } = this.props;
    return (
      <div>
        <Header />
        <CategoryList />
        <div className='row justify-content-between'>
          <Link to='/react/addpost/'>
            <div className='add-post-btn btn col'>+ Post</div>
          </Link>
          <PostSortControl />
        </div>
        <div className='post-list'>
        {
          posts.length > 0 && (
            posts.map( post => 
              <Post key={post.id} post={post} isPreview={true} updatePostVoteCount={updatePostVoteCount} />
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