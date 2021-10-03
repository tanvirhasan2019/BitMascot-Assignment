import * as actionType from '../constants/actionTypes';

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.SEARCH:     
       return { ...state, Users: action.payload, loading: false, errors: null };
    case actionType.LOADING:     
       return { ...state, Users: [], loading: true};
    default:
      return { ...state};
  }
};

export default searchReducer;

