import { SET_POST_SORT_METHOD,
         SET_COMMENT_SORT_METHOD
       } from './types';

export function setPostSortMethod(sortMethod) {
  return {
    type: SET_POST_SORT_METHOD,
    sortMethod
  };
}

export function setCommentSortMethod(sortMethod) {
  return {
    type: SET_COMMENT_SORT_METHOD,
    sortMethod
  };
}