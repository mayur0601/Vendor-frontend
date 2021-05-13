
import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    updateUser,
    LOG_OUT,
} from "./actionTypes";
import {APIUrls} from '../helpers/urls';

export function loginSuccessVendor(vendor) {
    return {
        type:LOGIN_SUCCESS,
        vendor
    }
}

export function startLoginVendor(){
return {
    type:LOGIN_START
}
}

export function  login(username,password) {
    // console.log("the user us",userData);
    return async (dispatch,getState) => {
        dispatch(startLoginVendor());
        const url = APIUrls.loginVendor();
         const vendorinfo = APIUrls.getVendor();
      
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json())

        const vendor = await fetch(vendorinfo,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=> res.json())

        console.log("vendor",vendor);
        console.log("result is",result);

        if (result.status === 'ok' && vendor) {
            // everythign went fine
            console.log('Got the token: ', result.data)
            localStorage.setItem('token_vendor', result.data);

            let user = {
                username:vendor.vendor.username,
                email:vendor.vendor?.email,
                contact:vendor.vendor?.contact,
                id:vendor.vendor._id
            }
            dispatch(loginSuccessVendor(user));
            localStorage.setItem('user',JSON.stringify(user));
            alert('Success')
           
        } else {
            alert(result.error)
        }

      };
  }
export function LogoutVendor(){
    return {
        type:LOG_OUT
    }
}

  export function Logout(){
    let url = APIUrls.VendorLogout();
    return async (dispatch)=>{
      let result = await fetch(url,{
            method:'GET',
            headers: {
              'Content-Type': 'application/json'
          }
        }).then((res) => res.json()).catch((err)=>{console.log(err)});

        console.log('result isssssss',result);
      if(result.status==='ok'){
        localStorage.removeItem('user')
        localStorage.removeItem('token_vendor')
        // localStorage.removeItem('farmer_products')
        dispatch(LogoutVendor());
        alert(result.message)
        return;
      }
    }
    
}

export function updatevendor(username,email,contact) {
    const updateurl = APIUrls.updateVendor();

    return async (dispatch) =>{
        const result = await fetch(updateurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                contact
            })
        }).then((res) => res.json())
        console.log("fsfsfs",result);


        if(result.success=== 'ok'){
            console.log("update user isss",result);
            
            let user = {
                username:(result.data?.username!=="") && result.data?.username,
                email:(result.data?.email!=="") && result.data?.email,
                contact:(result.data?.contact!=="") && result.data?.contact
            }
            dispatch(updateuser(user));
        }
    }
      
    
}

export function updateuser(user) {
    return {
        type:updateUser,
        user
    }
}