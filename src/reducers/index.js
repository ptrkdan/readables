import { combineReducers } from 'redux';
import * as actions from '../actions';
import { SET_SORT_METHOD } from '../actions/sort';
import { SORT_BY_VOTESCORE_DES } from '../utils/compareUtils';

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
      return action.posts.filter( post => !post.deleted );
    case actions.UPDATE_POST:
      return state.filter( post => post.id !== action.post.id)
        .concat(action.post);
    case actions.REMOVE_POST:
      return state.filter( post => post.id !== action.postId);
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

function sort(state = SORT_BY_VOTESCORE_DES, action) {
  switch(action.type) {
    case SET_SORT_METHOD:
      return action.sortMethod;
    default:
      return state;
  }
}

export default combineReducers({ categories, posts, comments, sort });