import React, { useEffect, useState }from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Validator from "./pages/validator";
import Nav from './components/Nav';
import PlaceDetails from './pages/PlaceDetails';

function App() {
  return (
    <div className="App">
      <header>
      <Validator/>
      </header>
      <Nav/>
      <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          path="/places/details/:place"
          render={(props) => <PlaceDetails {...props} />}
        />
        <Route exact path="/about" component={About} />
      <Switch/>
    </div>
  );
}

export default App;
