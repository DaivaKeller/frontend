import React from 'react';
const Home = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="filter-box">
          <FilterButton />
        </div>
      </div>
      <ProductList />
    </div>
  );
};
const FilterButton = () => (
  <button className="filter-button">Filter</button>
);
const products = [
  { id: 1, name: "Sony 1", description: "Description 1", price: "€100" },
  { id: 2, name: "Nokia 2", description: "Description 2", price: "€200" },
  { id: 3, name: "Samsung 3", description: "Description 3", price: "€300" },
  { id: 4, name: "Redmi 4", description: "Description 4", price: "€400" },
  { id: 5, name: "Apple 5", description: "Description 5", price: "€500" },
];
const ProductList = () => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
const ProductCard = ({ product }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <button className="cart-button">In den Warenkorb</button>
  </div>
);
export default Home;
  
  
  
  