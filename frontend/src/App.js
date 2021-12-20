import React, { useEffect, useState }from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.css';
import PlaceDetails from './pages/PlaceDetails';
import GoogleMap from './components/GoogleMap' 
import Home from './pages/Home'
import Nav from './components/Nav';
import PlaceCard from './components/List/PlaceCard';

function App() {
  return (
    <div className="App">
    <Home/>
    <Nav />
    <PlaceCard/>
    <GoogleMap />
    </div>
  );
}

export default App;
