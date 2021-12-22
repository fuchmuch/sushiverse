import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function LocationCard(props) {
  return (
    <div className='location-card' onClick={props.onClick}>
      <section className="location-info">
        <h1>{props.city}</h1>
       <h1>{props.country} </h1>
       <img src={props.image} />
      </section>
    </div>
  )
}