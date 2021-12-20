import React, { useState, useEffect } from 'react';
import axios from 'axios';


const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState(allData);


const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
    return data.title.search(value) != -1;
    });
    setFilteredData(result);
    }


useEffect(() => {
    axios( `http://localhost:3001/api/places/details/${props.match.place._id}`)
    .then(response => {
    console.log(response.data.place)
    setAllData(response.data.place);
    setFilteredData(response.data.place);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);

<div className="App">
<div style={{ margin: '0 auto', marginTop: '10%' }}>
<label>Search:</label>
<input type="text" onChange={(event) =>handleSearch(event)} />
</div>
<div style={{padding:10}}>
{filteredData.map((value,index)=>{
return(
    
<div key={value.id}>
<div style={styles}>
{value.title}
</div>
</div>
)
})}
</div>
</div>