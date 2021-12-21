import React from 'react';

const Search = (props) => {

    return (
        <form onSubmit={props.onSubmit}>
        <input type = "text" name= "search" 
        value= {props.value} 
        placeholder "Search Restaurants"
        onChange = {props.onChange} 
        ></input>
        <button type = "submit">Search</button>
        </form >
    )
}

export default Search