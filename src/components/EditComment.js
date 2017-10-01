import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import serializeForm from 'form-serialize';

class EditComment extends Component {

  state = {
    submitSuccess: false
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = serializeForm(event.target, { hash: true });
    this.props.editComment(data);
    this.setState({ submitSuccess: true });
  }

  render() {
    const { comments } = this.props;

    if (this.state.submitSuccess) {
      return <Redirect push to={`/viewPost/${comments[0].parentId}`} />
    } 
    else if (comments[0]) {
      const comment = comments[0];
      return (
        <div>
          <Header />
          <div className="add-comment">
            <form onSubmit={this.handleSubmit} id='add-comment-form'>
              <input type='hidden' name='id' value={comment.id} />
              <div className='add-comment-detail'>
                <ul>
                  <li>
                    <span><h4>Author: <input id='add-comment-detail-author' type='text' name='author' defaultValue={comment.author} /></h4></span>
                  </li>
                  <li>
                    <textarea id='add-comment-detail-body' type='text' name='body' defaultValue={comment.body} />
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

function mapStateToProps({ comments }, ownProps) {
  const { commentId } = ownProps.match.params;
  return {
    comments: comments.filter( comment => comment.id === commentId )
  };
}

export default connect(mapStateToProps)(EditComment);