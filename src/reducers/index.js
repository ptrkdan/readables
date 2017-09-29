import { combineReducers } from 'redux';
import * as actions from '../actions';

function categories(state = [], action) {
  switch(action.type) {
    case actions.POPULATE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch(action.type) {
    case actions.POPULATE_POSTS:
      return action.posts;
    default:
      return state;    
  }
}

function comments(state = [], action) {
  switch(action.type) {
    case actions.POPULATE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}

export default combineReducers({ categories, posts, comments });