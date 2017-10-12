import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FaLongArrowLeft } from 'react-icons/lib/fa';
import Header from './Header';
import serializeForm from 'form-serialize';

class AddPost extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    submitSuccess: false
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = serializeForm(event.target, {hash: true});
    this.props.addPost(data);
    this.setState({ submitSuccess: true });
  }

  render() {
    const { categories } = this.props;

    if (this.state.submitSuccess) {
      return <Redirect push to="/" />
    } else {
      return (
        <div>
          <Header />
          <Link to='/'>
            <div className='back-btn btn'><FaLongArrowLeft /></div>
          </Link>
          <div className="add-post">
            <form onSubmit={this.handleSubmit} id='add-post-form'>
              <div className='add-post-detail'>
                <ul>
                  <li>
                    <h3>Title: <input id='add-post-detail-title' type='text' name='title' /></h3>
                  </li>
                  <li>
                    <span><h4>Author: <input id='add-post-detail-author' type='text' name='author' /></h4></span>
                  </li>
                  <li>
                    <textarea id='add-post-detail-body' type='text' name='body' defaultValue='Type post here.' />
                  </li>
                  <li>
                    Category: <select name='category' form='add-post-form'>
                    {
                      categories.length > 0 && 
                        categories.map( category => (
                          <option key={category.name} value={category.name}>{category.name}</option>
                        ))
                    }
                    </select>
                  </li>
                  <li>
                    <button className='btn'>Post</button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps)(AddPost);