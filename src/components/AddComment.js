import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import serializeForm from 'form-serialize';

class AddComment extends Component {

  state = {
    submitSuccess: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = serializeForm(event.target, {hash: true});
    this.props.addComment(data);
    this.setState({ submitSuccess: true });
  };

  render() {
    const { postId } = this.props.match.params;

    if (this.state.submitSuccess) {
      return <Redirect push to={`/viewPost/${postId}`} />
    }
    return (
      <div>
        <Header />
        <div className="add-comment">
          <form onSubmit={this.handleSubmit} id='add-comment-form'>
            <div className='add-comment-detail'>
              <ul>
                <li>
                  <span><h4>Author: <input id='add-comment-detail-author' type='text' name='author' /></h4></span>
                </li>
                <li>
                  <textarea id='add-comment-detail-body' type='text' name='body' defaultValue='Type comment here.' />
                </li>
                <li>
                  <button className='btn'>Post</button>
                </li>
              </ul>
            </div>
            <input hidden readOnly name='parentId' value={postId} />
          </form>

        </div>
      </div>
    );
  }
}

export default AddComment;