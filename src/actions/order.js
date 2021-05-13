
import { 
    ORDER_SUCCESS,
    ORDER_FAILED
} from "./actionTypes";
import {APIUrls} from '../helpers/urls';

export function ordersuccess(orders){
    return {
        type:ORDER_SUCCESS,
        orders
    }
} 

export function orderFailedtofetch(err){
    return {
        type:ORDER_FAILED,
        err
    }
}

export function createOrder(product,address){

    return async (dispatch) =>{
         await fetch(`http://localhost:8000/api/vendor/orderProduct?id=${product._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address
            })
        }).then((res) => res.json())

        let vendor =  await fetch(APIUrls.getVendor(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).catch(err => dispatch(orderFailedtofetch(err)));

        console.log("vendor ,...",vendor);

        if(vendor){
            dispatch(ordersuccess(vendor.vendor.orders));
        }else{

        }
    }

   
}