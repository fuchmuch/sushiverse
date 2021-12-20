import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ReviewCard from '../components/ReviewCard';
import SubmitReview from '../components/SubmitReview';
import {useParams} from 'react-router-dom';

export default function PlaceDetails(props) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [reviews, setReviews] = useState([]);

  let {id} = useParams()
  console.log(id);

  const getPlace = async () => {
    console.log('this is get place function' )
    const res = await axios.get(
      `http://localhost:3001/api/places/${id}`
    );
    setSelectedPlace(res.data.place);
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
      {/* <SubmitReview {...props} /> */}
      {/* {reviews.map((review) => {
        if (review.place_id === props.match.params.placeId) {
          return (
            <ReviewCard
              name={review.name}
              comments={review.comments}
              ratings={review.ratings}
            />
          );
        } else {
          console.log('review doesnt match this place');
        }
      })} */}
    </div>
  ) : null;
}