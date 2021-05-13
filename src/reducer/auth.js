import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOG_OUT,
    updateUser
   
  } from '../actions/actionTypes';
  
  const initialAuthState = {
    user:localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : {},
    error: null,
    isLoggedin: localStorage.getItem('user') ?  true : false,
    inProgress: false,
  };


  export default function auth(state = initialAuthState, action) {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          inProgress: true,
        };
      case LOGIN_SUCCESS:
    //   case 
        return {
          ...state,
          user: action.vendor,
          isLoggedin: true,
          inProgress: false,
          error: null,
        };
      case updateUser:
        return {
          ...state,
          user: action.user,
        };
      
    case LOG_OUT:
        return {
            ...state,
            user:null,
            isLoggedin:false,
            error:null
        }
      default:
        return state;
    }
  }
  

  