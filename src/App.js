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
import Campaign from './components/campaign/Campaign';

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
          <HeaderMain/>
          <Campaign/>
          <Footer/>
        </Route>
        <Route path="/express">
          <HeaderMain/>
          <h1 className="text-center mt-5">Express comming soon</h1>
        </Route>
        <Route path="/cyclone">
          <HeaderMain/>
          <h1 className="text-center mt-5">Cyclone comming soon</h1>
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
