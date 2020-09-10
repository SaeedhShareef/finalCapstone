import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import addLocations from "./components/addLocations";
import allLocations from "./components/allLocations";
import Home from "./components/Home";
import Footer from "./components/Footer";
import contacts from "./components/contacts";
import categoryArt from "./components/categoryArt";
import categoryPlay from "./components/categoryPlay";
import categoryView from './components/categoryView';
import categoryShop from './components/categoryShop';
import categoryLearn from './components/categoryLearn';
import categorySkate from './components/categorySkate';
import PageNotFound from './components/404'

import './style.css';




function App() {
  return (
    <BrowserRouter>
    <div className="pageContain">
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/addLocations' component={addLocations} />
    <Route path='/allLocations' component={allLocations} />
    <Route path='/contacts' component={contacts} />
    
    <Route path='/categoryArt' component={categoryArt} />
    <Route path='/categoryPlay' component={categoryPlay} />
    <Route path='/categoryView' component={categoryView} />
    <Route path='/categoryShop' component={categoryShop} />
    <Route path='/categoryLearn' component={categoryLearn} />
    <Route path='/categorySkate' component={categorySkate} />
    <Route path="*" component={PageNotFound} />
    

    </Switch>
    <Footer />
   
      </div>
  
      </BrowserRouter>

      
  )
}
export default App;
