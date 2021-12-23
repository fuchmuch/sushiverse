import React from 'react';

const SearchResults= (props) => {

    
    return (
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            name="Search"
            value={props.value}
            placeholder="Search Restaurants"
            onChange={props.onChange}
          ></input>
          <button className='searchbtn' type="submit">Search</button>
        </form>
      )
    
}

export default SearchResults