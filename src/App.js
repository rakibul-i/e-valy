import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import HeaderMain from './components/Home/HeaderMain/HeaderMain';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/login">
          <h3>Login</h3>
        </Route>
        <Route path="/basket">
          <h1>Hello basket</h1>
        </Route>
        <Route path="/shops">
          <h1>Hello shops</h1>
        </Route>
        <Route path="/giftCard">
          <h1>Hello giftCard</h1>
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
          <h1>Hello id</h1>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
