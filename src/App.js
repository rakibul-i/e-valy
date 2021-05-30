import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import HeaderMain from './components/Home/HeaderMain/HeaderMain';
import ProductsDetails from './components/productDetails/ProductsDetails';
import Footer from './components/Home/Footer/Footer';
import BasketProducts from './components/Basket/BasketProducts';
import Shops from './components/Shops/Shops';
import GiftCard from './components/giftCard/GiftCard';
import GoogleLogin from './components/Firebase/Google/GoogleLogin';
import PrivetRoute from './components/Firebase/privetRoute/PrivetRoute';
import { createContext, useState } from 'react';
import Checkout from './components/Order/checkout/Checkout';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
    <Router>
      <Switch>
        <Route path="/login">
        <HeaderMain/>
        <GoogleLogin/>
        </Route>
        <Route path="/basket">
          <HeaderMain/>
          <BasketProducts/>
        </Route>
        <PrivetRoute path="/checkout">
          <HeaderMain/>
          <Checkout/>
        </PrivetRoute>
        <Route path="/shops">
          <HeaderMain/>
          <Shops/>
          <Footer/>
        </Route>
        <Route path="/giftCard">
        <HeaderMain/>
        <GiftCard/>
        <Footer/>
        </Route>
        <Route path="/campaigns">
          <h1>Hello campaigns</h1>
        </Route>
        <Route path="/express">
          <h1>Hello express</h1>
        </Route>
        <Route path="/cyclone">
          <h1>Hello cyclone</h1>
        </Route>
        <Route path="/allProducts">
          <h4>Hello all products</h4>
        </Route>
        <Route path="/:Id">
          <HeaderMain/>
          <ProductsDetails/>
          <Footer/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
