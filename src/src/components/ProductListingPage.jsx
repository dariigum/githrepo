import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Fern", price: 15, image: "/images/fern.jpg" },
  { id: 2, name: "Succulent", price: 10, image: "/images/succulent.jpg" },
  { id: 3, name: "Cactus", price: 20, image: "/images/cactus.jpg" },
  { id: 4, name: "Bonsai", price: 50, image: "/images/bonsai.jpg" },
  { id: 5, name: "Palm", price: 30, image: "/images/palm.jpg" },
  { id: 6, name: "Orchid", price: 25, image: "/images/orchid.jpg" },
];

const ProductListingPage = () => {
  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListingPage;
