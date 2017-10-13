import { POPULATE_CATEGORIES,
         POPULATE_POSTS,
         UPDATE_POST,
         REMOVE_POST,
         POPULATE_COMMENTS,
         UPDATE_COMMENT,
         REMOVE_COMMENT
      } from './types';

export function populateCategories(categories) {
  return {
    type: POPULATE_CATEGORIES,
    categories
  };
}

export function populatePosts(posts) {
  return {
    type: POPULATE_POSTS,
    posts
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  };
}

export function populateComments(comments) {
  return {
    type: POPULATE_COMMENTS,
    comments
  };
}

export function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

