import React, { useEffect, useState } from 'react';
import Placecard from '../components/PlaceCard';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  let history = useHistory();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces();
  }, []);
  const getPlaces = async () => {
    const res = await axios.get(`http://localhost:3001/api/places`);
    setPlaces(res.data.places);
  };
  return (
    <div>
      <h1>SUSHIVERSE</h1>
      <section className="places-Section">
        {places.map((place) => {
          {
            return (
              <PlaceCard
                onClick={() => history.push(`/places/details/${place._id}`)}
                name={place.name}
                image={place.url}
              />
            );
          }
        })}
      </section>
    </div>
  );
}
