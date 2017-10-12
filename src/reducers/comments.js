import { POPULATE_COMMENTS,
         UPDATE_COMMENT,
         REMOVE_COMMENT
       } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case POPULATE_COMMENTS:
      return action.comments;
    case UPDATE_COMMENT:
      return state.filter( comment => comment.id !== action.comment.id )
        .concat(action.comment);
    case REMOVE_COMMENT:
      return state.filter( comment => comment.id !== action.commentId );
    default:
      return state;
  }
};