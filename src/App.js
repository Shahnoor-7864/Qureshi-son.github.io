import React from 'react'
import './App.css';
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import {Switch , Route , Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function App() {
  return (
     <>
    <Navbar />
    <Switch>
     <Route exact path ="/" component = {Home} />
      <Route exact path ="/about" component = {About} />
      <Route exact path ="/services" component = {Services} />
      <Route exact path ="/Contact" component = {Contact} />
      <Redirect to = "/" />
    </Switch>
    <Footer />
    </>
    
  );
}

export default App;
