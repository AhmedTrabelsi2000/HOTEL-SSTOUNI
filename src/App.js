import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chambres from './components/pages/Chambres';

import Acceuil from './components/pages/Acceuil';
import Apropos from './components/pages/Apropos';
import Hotel from './components/pages/Hotel';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Acceuil} />
          <Route path='/chambres' component={Chambres} />
          <Route path='/apropos' component={Apropos} />
          <Route path='/hotel' component={Hotel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
