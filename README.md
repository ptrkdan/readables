# readables
Udacity React Nanodegree Program: Readables Project

A content and comment application powered by React and Redux. Users are able to post content under predefined categories, post comments on each content, and vote on each post and comment. Additionally, users are also able to edit and delete any posts and comments.

## Installation
```
npm install
npm start
```

## Readable API Server
A [local backend server](https://github.com/udacity/reactnd-project-readable-starter) is required to be running in the background to fetch the list of categories, and initial posts and comments.

## Views
### Main View
- List all available categories
- List all posts, initially sorted by vote score
- Sort order can be changed using sort control
- New posts can be added with the `+ Post` button
### Category View
- Display posts in certain category
### Post View
- Display details of one post
- List all comments for post
- Sort order can be changed using sort control
- New comments can be added with the `+ Comment` button
### Create/Edit View
- Display a form for creating new posts/comments, and editing existing posts/comments
- When editing, the pre-existing data is filled in the form

## Notes
### Post/Comment vote scores
Each post/comment has a vote score. Users can 'upvote' or 'downvote' to modify the score.
### Comment count for each post
The number of comments for each post is displayed beside the author name of each post.
### Delete confirmation
A confirmation dialog will be displayed when the `Delete` link is clicked.
### Data validation
There is currently no data validation for the inputs for the Create/Edit forms. 
