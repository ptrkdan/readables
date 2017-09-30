const uuidv1 = require('uuid/v1');

const READABLE_SERVER_URL = 'http://localhost:5001';

let AUTHORIZATION_TOKEN = localStorage.token;
if (!AUTHORIZATION_TOKEN) {
  AUTHORIZATION_TOKEN = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': AUTHORIZATION_TOKEN
};

export const fetchCategories = () =>
  fetch(`${READABLE_SERVER_URL}/categories`, { headers })
    .then( res => res.json() )
    .then( data =>  data.categories );

export const fetchPosts = () =>
  fetch(`${READABLE_SERVER_URL}/posts`, { headers })
    .then( res => res.json() )
    .then( data => data );

export const fetchCategoryPosts = (category) =>
  fetch(`${READABLE_SERVER_URL}/${category}/posts`, { headers })
    .then( res => res.json() )
    .then( data => data );

export const fetchPost = (postId) =>
fetch(`${READABLE_SERVER_URL}/posts/${postId}`, { headers })
  .then( res => res.json() )
  .then( data => data );

export const addPost = (postData) => {
  const data = {
    ...postData,
    timestamp: Date.now(),
    id: uuidv1()
  };
  fetch(`${READABLE_SERVER_URL}/posts/`, 
    { 
      method: 'POST', 
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
     body: JSON.stringify(data)
    }
  )
  .then( res => res.json() );
}

export const editPost = (postData) => {
  const data = {
    ...postData,
    timestamp: Date.now()
  };
  fetch(`${READABLE_SERVER_URL}/posts/${postData.id}`,
    {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  .then( res => res.json() );
}

export const deletePost = (postId) =>
fetch(`${READABLE_SERVER_URL}/posts/${postId}`, 
  {
    method: 'DELETE',
    headers
  })
  .then( res => res );

export const updatePostVoteCount = (postId, option) => {
  const data = { option };

  fetch(`${READABLE_SERVER_URL}/posts/${postId}`,
    {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  .then( res => res );
}

export const fetchComments = (postId) =>
fetch(`${READABLE_SERVER_URL}/posts/${postId}/comments`, { headers })
  .then( res => res.json() )
  .then( data => data );

export const addComment = (commentData) => {
  const data = {
    ...commentData,
    timestamp: Date.now(),
    id: uuidv1()
  };
  fetch(`${READABLE_SERVER_URL}/comments/`,
    {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  .then( res => res.json() );
}

export const deleteComment = (commentId) =>
fetch(`${READABLE_SERVER_URL}/comments/${commentId}`, 
  {
    method: 'DELETE',
    headers
  })
  .then( res => res );