'use client';

import React, { useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { usePropertyStore } from '@/store/propertyStore';

// Ajoutez ces imports en haut du fichier
import house1 from '@/public/images/house1.jpg';
import house2 from '@/public/images/house2.jpg';
import house3 from '@/public/images/house3.jpg';

export default function Marketplace() {
  const { properties, removeProperty } = usePropertyStore();

  useEffect(() => {
    // Supprimer la propriété "11 route de Liv"
    removeProperty("11 route de Liv");
  }, [removeProperty]);

  // Ajoutez cette fonction pour obtenir une image aléatoire
  const getRandomImage = () => {
    const images = [house1, house2, house3];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Property Marketplace</h1>
      {properties.length === 0 ? (
        <p>No properties available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <PropertyCard 
              key={index} 
              {...property} 
              imageUrl={getRandomImage().src}
            />
          ))}
        </div>
      )}
    </div>
  );
}