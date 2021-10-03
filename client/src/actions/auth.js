import { AUTH , LOGOUT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (state, router) => async (dispatch) => {
  try {
    const { data } = await api.login(state);
   
    if(data.access_token.length > 0 )
    {
      dispatch({ type: AUTH, data });
      router.push('/profile');
    }
    
  } catch (error) {
    console.log(error);
  }
};

export const signup = (state, router) => async (dispatch) => {
  try {
    const { data } = await api.register(state);
    dispatch({ type: AUTH, data });
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};


export const logout = (router) => async (dispatch) => {
  try {
   
    dispatch({ type: LOGOUT });
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

