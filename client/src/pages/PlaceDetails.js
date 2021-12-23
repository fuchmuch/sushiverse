import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubmitReview from '../components/SubmitReview';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/List/ReviewCard';
import Booking from '../components/Booking'
// import googleMapReact from 'google-map-react';
import {FaInstagram} from 'react-icons/fa';

// import { Rating } from 'react-simple-star-rating';


export default function PlaceDetails() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [reviews, setReviews] = useState([]);
  
  
  let { id } = useParams()
  console.log(id);

  const getPlace = async () => {
    console.log('this is get place function')
    const res = await axios.get(
      `http://localhost:3001/api/places/${id}`
    );
    setSelectedPlace(res.data.place);
  };

  const getReviews = async () => {
    const res = await axios.get(`http://localhost:3001/api/reviews`);
    setReviews(res.data.reviews);
  };

  const deleteReviews = async (reviewId) => {
    console.log(`this is line 35 ${reviewId}`);
    const res = await axios.delete(`http://localhost:3001/api/reviews/details/${reviewId}`);
    deleteReviews(res.data.reviews)
  };


  useEffect(() => {
    getPlace();
    getReviews();
  }, []);

  

  return selectedPlace ? (
    <div>
      <section className='calendar'>
        <Booking />
        <div className='imagetitle'>  
        <h1>{selectedPlace.name}</h1>
        <img src={selectedPlace.url} />
        </div>   
        </section>

      <section className="place-info">
        <div className= 'pcontainer'>
        <p className='p1'>{selectedPlace.michelin_awardWinning}</p>
        <p className='p2'>{selectedPlace.price}</p>
        <p className='p3'>{selectedPlace.address}</p>
        <p className='p4'>{selectedPlace.description}</p>
        <FaInstagram />
        </div>
      </section>
    
      <SubmitReview getReviews={getReviews}  id={id} />
      {console.log(reviews,'reviews')}
      {reviews.map((review) => {
       const {place} = review;
        if (place?._id === id) {

          console.log('sucess')
          return (
      
            <ReviewCard deleteReviews={deleteReviews}
            review={review}
              // name={review.name}
              // comments={review.comments}
              // ratings={review.ratings}
              // place={review.place._id} 
            />
            
          );
        } else {
          console.log('review doesnt match this place');
        }
      })}
    </div>
  ) : null;
}