import React, { useEffect, useState } from 'react';
import PlaceCard from '../components/List/PlaceCard';
import Locationcard from '../components/List/LocationCard'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Validator from '../components/Validator';

export default function Home(props) {
    let history = useHistory();
    const [places, setPlaces] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        getPlaces();
        getLocations();
    }, []);

    const getPlaces = async () => {
        const res = await axios.get(`http://localhost:3001/api/places`);
        setPlaces(res.data.places);
    };

    const getLocations = async () => {
        const res = await axios.get(`http://localhost:3001/api/locations`);
        setLocations(res.data.locations);
    };



    return (
      <div className='bodypart'>
            {/* {isLoggedIn ?  */}

            
                <div className='bodytitle'>
                <h1 className='maintitle'>ALL RESTAURANTS</h1>
                </div>
                

                {/* <section className="locations-Section">
      {locations.map((location) => {
          {
            return (
              <LocationCard
                onClick={() => history.push(`/locations/${location._id}`)}
                city={location.city}
                country={location.country}
                img={location.url}
              />
            );
          }
        })}
      </section> */}
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
    //         : <Validator/> 
    // } 
       
    )

}
