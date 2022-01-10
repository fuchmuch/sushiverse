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
  const [places, setPlaces] = useState([]);
  const [id, setId]= useState('')

  
  let { name } = useParams()
  console.log({id ,name,places,selectedPlace, reviews});


  const getId = (places) =>{
  for (let i = 0; i < places.length; i++) {
    const p = places[i];
  let convertedName = p.name.split(" ").join('-').toLowerCase()
    if (name ===convertedName){
      console.log('sucsess')
      setId(p._id)      
    }
  }
  }
  const getPlaces = async () => {
    const res = await axios.get(`http://localhost:3001/api/places`);
    setPlaces(res.data.places);
    getId(res.data.places)
  };


  const getPlace = async () => {
    console.log('this is get place function>>>>',id)
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
    getPlaces();
    getReviews();
    return () => {}
  }, [])

  useEffect(() => {
    if(id) getPlace()
    return () => {}
  }, [id])
  
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
       console.log({name});
        if (place?._name === name) {

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
        }
      })}
    </div>
  ) : null;
}