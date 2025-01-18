import React from 'react';
import PlantCard from './PlantCard';

const products = [
  { id: 1, name: 'Snake Plant', price: 20, image: '/images/snake_plant.jpg' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 30, image: '/images/fiddle_leaf.jpg' },
  // Add more plants
];

const ProductListingPage = () => (
  <div className="product-listing">
    <h2>Our Plants</h2>
    <div className="product-grid">
      {products.map((product) => (
        <PlantCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductListingPage;
