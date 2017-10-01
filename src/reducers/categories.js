import { POPULATE_CATEGORIES } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case POPULATE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }  
};