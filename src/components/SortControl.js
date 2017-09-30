import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSortMethod } from '../actions/sort';
import { SORT_BY_VOTESCORE_ASC,
         SORT_BY_VOTESCORE_DES,
         SORT_BY_TIMESTAMP_ASC,
         SORT_BY_TIMESTAMP_DES
       } from '../utils/compareUtils';

class SortControl extends Component {

  onSortChange = (e) => {
    this.props.setSortMethod(e.target.value);
  }

  render() {
    const { sort } = this.props;
    return (
      <div className='sort-control-select select col-2'>
        <select name='sort-control' onChange={this.onSortChange} value={sort}>
          <option key='title' >Sort by...</option>
          <option key={SORT_BY_VOTESCORE_DES} value={SORT_BY_VOTESCORE_DES}>Vote, descending</option>
          <option key={SORT_BY_VOTESCORE_ASC} value={SORT_BY_VOTESCORE_ASC}>Vote, ascending</option>
          <option key={SORT_BY_TIMESTAMP_DES} value={SORT_BY_TIMESTAMP_DES}>Time, descending</option>
          <option key={SORT_BY_TIMESTAMP_ASC} value={SORT_BY_TIMESTAMP_ASC}>Time, ascending</option>
        </select>
      </div>
    );
  }
}

function mapStateToProps({ sort }) {
  return { sort };
}

function mapDispatchToProps(dispatch) {
  return {
    setSortMethod: (sortMethod) => dispatch(setSortMethod(sortMethod))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortControl);