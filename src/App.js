import { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./Components/Hero Section/Hero";
import Navbar from "./Components/Navbar/Navbar";
import ResultScreen from "./screens/ResultScreen";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import "./App.css";
import ChickenDetail from './screens/ChickenDetail';
import MyCoop from "./screens/MyCoop";
import { useDispatch } from 'react-redux';
import { getMyCoopsAction } from './redux/actions/CoopsActions';

import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import EthereumWallet from './Components/EthereumWallet';
import MetaPopWindow from "./Components/MetaPopWindow";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {

      dispatch(getMyCoopsAction())
  },[])

  return (
    <Router>
      <div className="App">
          <Navbar />
       

        <Switch>
          {/* <Route path="/order/:id/invoice">
            <OrderInvoice />
          </Route> */}

          <Route path="/results">
            <ResultScreen />
           
          </Route>

          <Route path="/myCoops">
            <MyCoop />
          </Route>

          <Route path="/chicken-detail/:id">
            <ChickenDetail />
          </Route>

          <Route path="/">
         
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
