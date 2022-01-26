import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Realisation from './components/pages/REALISATION/Realisation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import AndroidIos from "./components/pages/ANDROID & IOS/Android&Ios";
import ApplicationLogiciel from "./components/pages/APPLICATION &LOGICIEL/Application&Logiciel";
import SiteWeb from "./components/pages/SITE WEB/SiteWeb";
import Maintenance from "./components/pages/MAINTENANCE/Maintenance";
import Hebergement from "./components/pages/HEBERGEMENT/Hebergement";
import Footer from "./components/pages/Footer.js/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/realisation' component={Realisation} />
          <Route path='/android&ios' component={AndroidIos} />
          <Route path='/application&logiciel' component={ApplicationLogiciel} />
          <Route path='/site_web' component={SiteWeb} />
          <Route path='/maintenance' component={Maintenance} />
          <Route path='/application-desktop' component={Hebergement} />
          <Route path='/contactez-nous' component={Hebergement} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
