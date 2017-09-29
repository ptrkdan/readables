export const POPULATE_CATEGORIES = 'POPULATE_CATEGORIES';
export const POPULATE_POSTS = 'POPULATE_POSTS';
export const POPULATE_COMMENTS = 'POPULATE_COMMENTS';

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

export function populateComments(comments) {
  return {
    type: POPULATE_COMMENTS,
    comments
  };
}
