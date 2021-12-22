import React from 'react';

const SearchResults= (props) => {

    return (
        <div className= 'filter'>
        <form onSubmit={props.onSubmit}>
        <input type = "text" name= "search" 
        value= {props.value} 
        placeholder = "Search Restaurants"
        onChange = {props.onChange}></input>
        {/* <button type = "submit">Search</button> */}
        </form >
        </div>
    )
}

export default SearchResults