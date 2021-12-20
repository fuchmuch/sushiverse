import React, { useEffect, useState } from 'react';

export default function ReviewCard(props) {
  return (
    <div className='rev-card'>
      <section className="place-info">
        <h1>{props.name}</h1>
        <h2>{props.ratings}</h2>
        <p>{props.comments}</p>

      </section>
    </div>
  )
};