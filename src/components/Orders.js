import React from 'react'
import { useSelector } from 'react-redux';
import {Table} from "react-bootstrap";

function Orders() {

    const state = useSelector(state => state.orders);

    return (
        <div className="order_layout">

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Order date</th>
      <th>image</th>
      <th>title</th>
      <th>price</th>
      <th>shipping address</th>
      <th>delivery yes/No</th>
    </tr>
  </thead>
  <tbody>
      {
        state.orders.map(order=>(
            
            <tr>
            <td>
                <p>{order.createdAt.substring(0,10)}</p>
                <p><span>{order.createdAt.substring(11,16)}</span></p>
            </td>
            <td>
              <img src={order.product?.productImage} style={{height:200 , border:"2 solid black"}}/>
            </td>
            <td><p><strong>{order.product?.title}</strong></p></td>
            <td><p>{order.product?.price}</p></td>
            <td> <p>{order?.address}</p></td>
            <td><p>{!order.delivery && "delivery in process"}</p></td>
            </tr>
        ))  
      }
    
   
  </tbody>
</Table>

            
        </div>
    )
}

export default Orders
