import { SET_SORT_METHOD } from '../actions/sort';
import { SORT_BY_VOTESCORE_DES } from '../utils/compareUtils';

export default (state = SORT_BY_VOTESCORE_DES, action) => {
  switch(action.type) {
    case SET_SORT_METHOD:
      return action.sortMethod;
    default:
      return state;
  }
};