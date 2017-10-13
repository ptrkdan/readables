import { SET_POST_SORT_METHOD,
         SET_COMMENT_SORT_METHOD
       } from '../actions/types';
import { SORT_BY_VOTESCORE_DES } from '../utils/compareUtils';

const initialSortState = {
  postSortMethod: SORT_BY_VOTESCORE_DES,
  commentSortMethod: SORT_BY_VOTESCORE_DES
}

export default (state = initialSortState, action) => {
  switch(action.type) {
    case SET_POST_SORT_METHOD:
      return {
        ...state,
        postSortMethod: action.sortMethod
      };
    case SET_COMMENT_SORT_METHOD:
      return {
        ...state,
        commentSortMethod: action.sortMethod
      };
    default:
      return state;
  }
};