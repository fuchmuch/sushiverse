import React, { useEffect, useState } from 'react';
import PlaceCard from '../components/List/PlaceCard';
import Locationcard from '../components/List/LocationCard'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Validator from '../components/Validator';
import SearchResults from '../components/SearchResults';

export default function Home(props) {
    let history = useHistory();
    const [places, setPlaces] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);
    // const [searchResults, setSearchResults] = useState([])
    // const [searched, toggleSearched] = useState(false)
    // const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        getPlaces();
        getLocations();
    }, []);
//function referring id
    // const getSearchResults = async (event) => {
    //    event.preventDefault()
    //     const res= await axios.get(
    //       `http://localhost:3001/api/places/${id}`
    //     )
    //     setSearchResults(response.data.results)
    //     setSearchQuery('')
    //     toggleSearched(true)
    //   }
    //   const handleChange = (event) => {
    //     setSearchQuery(event.target.value)
    //   }


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

              {/* <div className="search">
        <SearchResults
            value={searchQuery}
            onChange={handleChange}
          onSubmit={getSearchResults}
        />
        {searched ? (
          <div>
            <h1>Search Results</h1>
            <section className="search-results container-grid">
              {searchResults.map((result) => (
                   <PlaceCard
                   onClick={() => history.push(`/places/details/${place._id}`)}
                   name={place.name}
                   image={place.url}
               />
              ))}
            </section>
          </div>
        ) : null}
      </div> */}
            
                <div className='bodytitle'>
                <h1 className='maintitle'>ALL RESTAURANTS</h1>
                </div>
                

                {/* <section className="locationspt">
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
                          let name = place.name.split(" ").join('-').toLowerCase()
                            return (
                                <PlaceCard
                                    onClick={() => history.push(`/places/details/${name}`)}
                                    name={place.name}
                                    image={place.url}
                                />
                            );
                        }
                    })}
                </section>
                </div>
    
       
    )

}
