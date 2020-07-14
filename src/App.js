import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Members from './Members';
import Contact from './Contact';
import News from './News';
import Gallery from './Gallery';
import Parents from './Parents';
function App() {
  return (
    <BrowserRouter>
 <div id="wrapper" className="wrapper-container">
<Header />
<Switch>
<Route path="/" exact component={Home}><Home /></Route>
<Route path="/About"  component={About}><About /></Route>
<Route path="/Members"  component={Members}><Members /></Route>
<Route path="/Contact" component={Contact}><Contact /></Route>
<Route path="/News"  component={News}><News /></Route>
<Route path="/Gallery"  component={Gallery}><Gallery /></Route>
<Route path="/Parents"  component={Parents}><Parents /></Route>
</Switch>
<Footer />
 </div>
 </BrowserRouter>
  );
}

export default App;
