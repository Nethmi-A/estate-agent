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
      <img  className='house-picture' src={picture} alt={type}  />
      {/* <div className='tags'>
        <span className='icon'>
          <img className='image-icon' src="public/images/location.png" alt="location-icon" />
        </span>
        <span className="location">{location}</span>
      </div> */}
      <h4 className="location">{location}</h4>

      <div className='property-top'>
        <span className="price">£{price.toLocaleString()}</span>
        <span className="type">{type}</span>
      </div>
      <hr className="divider" />

      <div className="property-meta">
        <div className="property-bottom">
          <span className="icon-label">Bedrooms</span>
          <span className="icon">
            <img
              className="image-icon"
              src="/images/bedroom.png"
              alt="bedroom icon"
            />
          </span>
          <span className="bedrooms">{bedrooms}</span>
        </div>

        <div className="property-bottom">
          <span className="icon-label">Tenure</span>
          <span className="icon">
            <img
              className="image-icon"
              src="/images/tenure.png"
              alt="tenure icon"
            />
          </span>
          <span className="tenure">{tenure}</span>
        </div>
      </div>

      {/* favorite button */}
      <button className='favorite-button'
        onClick={() => addToFavourites(property)}
        >Add to Favourites</button>
    
    </article>
  );
};

export default ImageCard;
