import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../css/product.css";
import {Link} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft:30,
    marginTop:30
  },
  media: {
    height: 140,
  },
  button:{
      backgroundColor:"black",
      color:"white"
  }

});


export default function Product({title,Qty,price,productImage,source,product}) {
  const classes = useStyles();

  return (

    <div>

      <div className="product">
        <div className="product_image">
           <img src={productImage} alt="Smiley face" />
        </div>
        <div className="product_body">
            <p><strong>{title}</strong></p>
            <p><strong>Qty-{Qty}</strong></p>
            <p>price-{price}</p>
            <p>{source}</p>
            <Link to={{
        pathname: '/mainProduct',
        props: { product: product }
      }} style={{ textDecoration: 'none' }} >
            <button>more info</button>
            </Link>
        </div>
         </div>

    
    </div>
  );
}