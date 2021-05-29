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
import SignUp from './components/Firebase/Signup/SignUp';
import { AuthProvider } from './components/Firebase/contexts/AuthContext';
import Login from './components/Firebase/Login/Login';

function App() {
  return (
    <div className="App">
    <Router>
        <AuthProvider>
      <Switch>
        <Route path="/signup">
        <HeaderMain/>
        <SignUp/>
        </Route>
        <Route path="/login">
        <HeaderMain/>
        <Login/>
        </Route>
        <Route path="/basket">
          <HeaderMain/>
          <BasketProducts/>
        </Route>
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
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
