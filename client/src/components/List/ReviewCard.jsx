import React, { useEffect, useState } from 'react';


export default function ReviewCard(props) {
  return (
    <div className='rev-card'>
      <section className="place-info">
        <h1>{props.review.name}</h1>
        <h2>{props.review.ratings}</h2>
        <p>{props.review.comments}</p>
      <button className='deletebtn' onClick={()=>{props.deleteReviews(props.review._id)}}>Delete</button>
      </section>
    </div>
  )
};