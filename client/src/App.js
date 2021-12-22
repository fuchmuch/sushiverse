import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.css';
import PlaceDetails from './pages/PlaceDetails';
import GoogleMap from './components/GoogleMap'
import Home from './pages/Home'
import Nav from './components/Nav';
import PlaceCard from './components/List/PlaceCard';
import Validator from './components/Validator';
import SubmitReview from './components/SubmitReview';
import LocationCard from './components/List/LocationCard';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route
            path="/login"
            component={() => <Validator />}
          />
          <Route
            path="/home"
            component={() => <Home />}
          />

          
          <Route
            path="/places/details/:id"
            component={() => <PlaceDetails />}
          />

        </Switch>
      </main>
      {/* <GoogleMap /> */}
    </div>
  );
}

export default App;
