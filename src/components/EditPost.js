import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import serializeForm from 'form-serialize';

class EditPost extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    submitSuccess: false
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = serializeForm(event.target, {hash: true});
    this.props.editPost(data);
    this.setState({ submitSuccess: true });
  }

  render() {
    const { posts } = this.props;

    if (this.state.submitSuccess) {
      return <Redirect push to="/" />
    } 
    else if (posts[0]) {
      const post = posts[0];
      return (
        <div>
          <Header />
          <div className="add-post">
            <form onSubmit={this.handleSubmit} id='add-post-form'>
              <input type='hidden' name='id' value={post.id} />
              <div className='add-post-detail'>
                <ul>
                  <li>
                    <h3>Title: <input id='add-post-detail-title' type='text' name='title' defaultValue={post.title}/></h3>
                  </li>
                  <li>
                    <span><h4>Author: <input id='add-post-detail-author' type='text' name='author' defaultValue={post.author} /></h4></span>
                  </li>
                  <li>
                    <textarea id='add-post-detail-body' type='text' name='body' defaultValue={post.body} />
                  </li>
                  <li>
                    <button className='btn'>Edit</button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

function mapStateToProps({ posts }, ownProps) {
  const { postId } = ownProps.match.params;
  return {
      posts: posts.filter( post => post.id === postId )
  };
}

export default connect(mapStateToProps)(EditPost);