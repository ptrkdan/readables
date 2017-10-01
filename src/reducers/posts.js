import { POPULATE_POSTS,
         UPDATE_POST,
         REMOVE_POST
       } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case POPULATE_POSTS:
      return action.posts.filter( post => !post.deleted );
    case UPDATE_POST:
      return state.filter( post => post.id !== action.post.id )
        .concat(action.post);
    case REMOVE_POST:
      return state.filter( post => post.id !== action.postId );
    default:
      return state;    
  }
};