import React from 'react';
import './kontaktseite2.css';

function App() {
  return (
    <div className="container">
      {Array.from({ length: 8 }, (_, i) => (
        <div className="box" key={i} id={`box${i + 1}`}>
          <h2>Container {i + 1}</h2>
          <p>Inhalt für Container {i + 1}</p>
        </div>
      ))}
    </div>
  );
}
const container = [
    { id: 1, name: "1", description: "Kontakte" },
    { id: 2, name: "2", description: "Unsere Filiale" },
    { id: 3, name: "3", description: "Karte" },
    { id: 4, name: "4", description: "Lieferung" },
    { id: 5, name: "5", description: "Garantie" },
    { id: 6, name: "6", description: "Support" },
    { id: 7, name: "7", description: "Service und Reparature" },
    { id: 8, name: "8", description: "Verkauf und Rückabgabe" },

];
 //const ProductCard = ({ product }) => (
  //  <div className="product-card">
   //   <h2>{product.name}</h2>
    //  <p>{product.description}</p>
     // <p className=" ">{product.name}</p>
    //  <button className="add-to-cart-button">In den Warenkorb</button>
    //</div>
 // );


export default App;

