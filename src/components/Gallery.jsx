import React from 'react';
import ImageCard from './ImageCard';

const Gallery = ({ properties }) => {
  return (
    <section>
      {properties.map(property => (
        <ImageCard key={property.id} property={property} />
      ))}
    </section>
  );
};

export default Gallery;
