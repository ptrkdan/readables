export const POPULATE_CATEGORIES = 'POPULATE_CATEGORIES';
export const POPULATE_POSTS = 'POPULATE_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const POPULATE_COMMENTS = 'POPULATE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

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

