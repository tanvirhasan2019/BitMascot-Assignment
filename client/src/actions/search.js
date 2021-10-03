import { SEARCH, LOADING} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const Search = (search) => async (dispatch) => {
  try {

    dispatch({ type: LOADING, payload : [] });
    const { data } = await api.search(search);
   
    dispatch({ type: SEARCH, payload : data.Data });
  
   
    
  } catch (error) {
    console.log(error);
  }
};



