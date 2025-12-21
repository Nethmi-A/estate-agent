import React from 'react';

const ImageCard = ({ property }) => {
  const {
    type,
    location,
    price,
    picture,
    bedrooms,
    tenure,
    description
  } = property;

  return (
    <article className='imageCard'>
      <img  className='house-picture' src={picture} alt={type} width="500" />
      <h2 className='price'>£{price}</h2>
      <div className='tags'>
        <img className='icon' src="public/images/location.png" alt="location-icon" />
        <p>{location}</p>
      </div>
      <div className='tags'>
        <img className='icon' src="public/images/location.png" alt="location-icon" />
        <p>{location}</p>
      </div>
    

      <ul>
        <li>Type: {type}</li>
        <li>Bedrooms: {bedrooms}</li>
        <li>Tenure: {tenure}</li>
        <li>Description: {description}</li>
      </ul>
      <button>Add to Favourites</button>
    </article>
  );
};

export default ImageCard;
