import React from 'react';
import ImageCard from './ImageCard';

const Gallery = ({ properties, addToFavourites }) => {
  return (
    <section>
      {properties.length ===0? (
        <p>No properties found.</p>
      ): (
        properties.map(property => (
        <ImageCard key={property.id} 
        property={property}
        addToFavourites = {addToFavourites} />
      ))
      )}
      
    </section>
  );
};

export default Gallery;
