import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';
import SubmitReview from '../components/SubmitReview';

export default function PlaceDetails(props) {
  const [selectedRide, setSelectedPlace] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getPlace = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/places/details/${props.match.params.placeId}`
    );
    setSelectedPlace(res.data.ride);
  };

  const getReviews = async () => {
    const res = await axios.get(`http://localhost:3001/api/reviews`);
    setReviews(res.data.reviews);
  };

  useEffect(() => {
    getPlace();
    getReviews();
  }, []);

  return selectedPlace ? (
    <div>
      <section className="place-info">
        <h1>{selectedPlace.name}</h1>
        <img src={selectedPlace.url} />
        <p>{selectedPlace.description}</p>
      </section>
      <SubmitReview {...props} />
      {reviews.map((review) => {
        if (review.place_id === props.match.params.rideId) {
          return (
            <ReviewCard
              name={review.name}
              comments={review.comments}
              ratings={review.ratings}
            />
          );
        } else {
          console.log('review doesnt match this ride');
        }
      })}
    </div>
  ) : null;
}