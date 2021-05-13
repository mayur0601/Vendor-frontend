import React, { useState ,useEffect} from 'react'
import GooglePayButton from '@google-pay/button-react';
import { useDispatch } from 'react-redux';
import {createOrder} from "../actions/order";
import { useHistory } from "react-router-dom";

function Payment(props) {

 const [paymentdone,setPay] = useState({});
 const dispatch = useDispatch();
 const history = useHistory();

 useEffect(() => {

  if(paymentdone.paymentMethodData){
    dispatch(createOrder(props.product,paymentdone.shippingAddress));
    history.push('/profile');
    console.log("true");
  }else{
    console.log("false");
  }


 },[paymentdone])
  
    return (
      <>
        <div className="payment">
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: '12345678901234567890',
              merchantName: 'Demo Merchant',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: `${props.product.price}`,
              currencyCode: 'INR',
              countryCode: 'US',
            },
            shippingAddressRequired: true,
            callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
          }}
          onLoadPaymentData={paymentRequest => {
            console.log('Success', paymentRequest);
          }}
          onPaymentAuthorized={paymentData => {
              console.log('Payment Authorised Success', paymentData)
              setPay(paymentData);
              return { transactionState: 'SUCCESS'}
            }
          }
          onPaymentDataChanged={paymentData => {
              console.log('On Payment Data Changed', paymentData)
              return { }
            }
          }
          existingPaymentMethodRequired='false'
          buttonColor='black'
          buttonType='buy'
        />
      </div>
      </>
    )
}

export default Payment
