import React from 'react'
import {Dropdown} from "react-bootstrap";
import "../css/mainProduct.css";
import Payment from "./Payment";
import "../css/product.css";
function MainProduct(props) {
    let product = props.location.props.product;

    return (
        <>
        <div className="center">
        <div className="mainproduct">
            <div className="mainproduct_left">
            {console.log("ggggg",product)}
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>address-: <strong>{product.source}</strong></p>
                <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {product.Qty}
                     </Dropdown.Toggle>

                <Dropdown.Menu>
                    
                    
                    {/* <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <br></br>
                <p>Price- <strong>{product.price}</strong></p>

            </div>
            <div className="mainproduct_right">
                <div className="mainproduct_image">
                    <img className="image_product" src={product.productImage}/>
                </div>
                <div className="payment_button" style={{marginTop:20}}>
                    <Payment 
                        product={product}
                    />
                </div>
                
            </div>
        </div>
        </div>


      
        </>

    )
}

export default MainProduct
