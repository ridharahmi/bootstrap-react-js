import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    <Footer/>

    </div>
    </BrowserRouter>


  );
}

export default App;
