// export default FavouritePanel;
import React from 'react';
import { FaWindowClose } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const FavouritePanel = ({
  favouriteList,
  removeFromFavourites,
  clearFavourites,
  className,
  toggleFavourites,
  addToFavourites,
  allProperties
}) => {

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const propertyId = e.dataTransfer.getData("propertyId");
    const property = allProperties.find(p => p.id === propertyId);

    if (property) {
      addToFavourites(property);
    };

  }
  return (
    <aside className={`favourites-panel ${className}`}
    onDragOver={handleDragOver}
    onDrop={handleDrop}>
      <div id="cross" onClick={toggleFavourites}>
        <FaWindowClose/>
      </div>
      <h3>Favourites</h3>

      {favouriteList.length === 0 && (
        <p>No favourites yet</p>
      )}

      {favouriteList.map(property => (
        <div key={property.id} 
        className="favourite-item"
        draggable
        onDragStart={(e) => 
          e.dataTransfer.setData("removeId", property.id)
        }>
          <div id='image-wrapper'>
            <img  
            className='favourite-image' 
            src={property.picture} 
            alt={property.type}  />
          </div>
          <div className="favourite-info">
            <p className="fav-location">{property.location}</p>
            <p className="fav-price">£{property.price.toLocaleString()}</p>
          </div>
          
          <button className="remove-fav" 
          onClick={() => removeFromFavourites(property.id)}> 
            <RxCross2 /> Remove
          </button>
        </div>
      ))}

      {favouriteList.length > 0 && (
        <div className='clear-button'>
          <button id='clear-all'
          onClick={clearFavourites}>
          Clear All
        </button>
        </div>

      )}
    </aside>
  );
};

export default FavouritePanel;
