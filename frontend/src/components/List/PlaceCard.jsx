import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function PlaceCard(props) {
  return (
    <div className='place-card' onClick={props.onClick}>
      <section className="place-info">
        <h1 className='eachnameplace'>{props.name}</h1>
        <img src={props.image} />
      </section>
    </div>
  )
}