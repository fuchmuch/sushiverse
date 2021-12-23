import React, { Component, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.css';
import PlaceDetails from './pages/PlaceDetails';
import Home from './pages/Home'
import Nav from './components/Nav';
import PlaceCard from './components/List/PlaceCard';
import Validator from './components/Validator';
import SubmitReview from './components/SubmitReview';
import LocationCard from './components/List/LocationCard';
import About from './components/About';

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
            path="/nav"
            component={() => <Nav />}
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
