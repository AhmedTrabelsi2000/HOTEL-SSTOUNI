import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';

import Acceuil from './components/pages/Acceuil';
import Produits from './components/pages/Produits';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Acceuil} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Produits} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
