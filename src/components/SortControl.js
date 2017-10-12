import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaSortAlphaAsc from 'react-icons/lib/fa/sort-alpha-asc';
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
      <span className='col-3' style={{ textAlign: 'right' }}>
        <FaSortAlphaAsc />
        <span className='sort-control-select'>
          <select name='sort-control' onChange={this.onSortChange} value={sort}>
            <option key={SORT_BY_VOTESCORE_DES} value={SORT_BY_VOTESCORE_DES}>Votes, desc.</option>
            <option key={SORT_BY_VOTESCORE_ASC} value={SORT_BY_VOTESCORE_ASC}>Votes, asc.</option>
            <option key={SORT_BY_TIMESTAMP_DES} value={SORT_BY_TIMESTAMP_DES}>Time, desc.</option>
            <option key={SORT_BY_TIMESTAMP_ASC} value={SORT_BY_TIMESTAMP_ASC}>Time, asc.</option>
          </select>
        </span>
      </span>
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