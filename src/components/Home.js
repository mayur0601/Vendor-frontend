import {React,useRef} from 'react'
import Product from "./Product";
import "../css/home.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Home(props) {


    const inputEl = useRef("");

     const state = useSelector(state => state.auth);
    
    let productMarkup = props.products.map((product)=>(

      
      <Link to={{
        pathname: '/mainProduct',
        props: { product: product }
      }} style={{ textDecoration: 'none' }} >
       
          <Product
             Style={{paddingLeft: 13}}
             product={product}
            key={product._id}
            title={product.title}
            price={product.price}
            description={product.description}
            Qty={product.Qty}
            productImage={product.productImage}
            source={product.source}
        />
        </Link>
       

       ))

       const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
      };

    return (
        
            (state.isLoggedin)?(

                <div className="home">
                <div className="ui search">
               <div className="ui icon input">
                 <input
                   ref={inputEl}
                   type="text"
                   placeholder="Search Products..."
                   className="prompt"
                   value={props.term}
                   onChange={getSearchTerm}
                   className="searchBox"
                 />
                 <i className="search icon"></i>
               </div>
             </div>
                  <div className="products" >
                    
                  {productMarkup.length > 0
                 ? productMarkup
                 : "No products available"}
                  </div>
                 
               </div>

            ):(
                <div>
                    <h2>please do log in</h2>
                </div>

            )
        
       
    )
}

export default Home

// 1
// 100 200 + 2 / 5 * 7 +