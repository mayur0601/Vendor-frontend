import { 
    ORDER_SUCCESS,
    ORDER_FAILED
} from "../actions/actionTypes";


const initialAuthState ={
    
    orders:[],
    error:null
};

export default function orders(state = initialAuthState, action) {
    switch (action.type) {
      case ORDER_SUCCESS:
        return {
          ...state,
          orders: action.orders
        };
        case ORDER_FAILED:
            return {
                ...state,
                error:action.err
         };
      
      default:
        return state;
    }
  }
  