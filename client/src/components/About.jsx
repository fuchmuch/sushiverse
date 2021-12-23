import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <h3>
        Welcome to Sushiverse! Don't know where to find best omakase places in New York? 
        Sushiverse is a food specialty web service that designed to help users to find 
        best omakase places by filtering their need of desires. Users can make their own reviews 
        and share with others after their experiences of visiting each omakase restaurant in NYC.
      </h3>
      <img  src= 'https://i.imgur.com/61gAr4u.jpg' />
      <div className='my-about'>
      <img  src= 'https://cdn-icons-png.flaticon.com/512/174/174857.png' />
      <div className='links'>
        <h6><a href="https://www.linkedin.com/in/gihc/">Gihae</a></h6>
      </div>
      </div>
    </div>
  );
};

export default About;