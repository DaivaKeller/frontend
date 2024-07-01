import React from 'react';
const Smartphones = () => {
  return (
    <div className="smartphone-container">
      <div className="top-tiles">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="small-tile">Tile {index + 1}</div>
        ))}
      </div>
      <button className="most-purchased-button">Meist gekaufte Artikel</button>
      <div className="product-grid">
        {smartphones.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
const smartphones = [
  { id: 1, name: "Smartphones 1", description: "Beschreibung 1", price: "€250" },
  { id: 2, name: "Smartphones 2", description: "Beschreibung 2", price: "€250" },
  { id: 3, name: "Smartphones 3", description: "Beschreibung 3", price: "€350" },
  { id: 4, name: "Smartphones 4", description: "Beschreibung 4", price: "€450" },
  { id: 5, name: "Smartphones 5", description: "Beschreibung 5", price: "€550" },
  { id: 6, name: "Smartphones 6", description: "Beschreibung 6", price: "€650" },
  { id: 7, name: "Smartphones 7", description: "Beschreibung 7", price: "€750" },
  { id: 8, name: "Smartphones 8", description: "Beschreibung 8", price: "€850" },
  { id: 9, name: "Smartphones 9", description: "Beschreibung 9", price: "€950" },
  { id: 10, name: "Smartphones 10", description: "Beschreibung 10", price: "€1050" },
];
const ProductCard = ({ product }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p className="price">{product.price}</p>
    <button className="add-to-cart-button">In den Warenkorb</button>
  </div>
);
export default Smartphones;


  