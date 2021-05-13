import {React,useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import MainProduct from "./components/MainProduct";
import Profile from "./components/Profile";
import {APIUrls} from './helpers/urls';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {

  const [products,setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  
 
  useEffect(() => {
      axios
        .get(APIUrls.getallProduct())
        .then((res) => {
          setProducts(res.data.allProducts);
        })
        .catch((err) => console.error(err));
    }, []);


    const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
        const newProductList = products.filter((product) => {
          return Object.values(product)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setSearchResults(newProductList);
      } else {
        setSearchResults(products);
      }
    };


  return (
    <Router>
      <Navbar /> 
      <Switch>
      <Route exact path='/' 
      render={(props) => (
        <Home
          {...props}
          products={searchTerm.length < 1 ? products : searchResults}
          term={searchTerm}
          searchKeyword={searchHandler}
        />
      )}
      />
        <Route exact path='/login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/mainProduct' component={MainProduct} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;