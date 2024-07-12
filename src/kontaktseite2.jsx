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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170347.36124117396!2d11.377034514267434!3d48.155022007850214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2zTcO8bmNoZW4!5e0!3m2!1sde!2sde!4v1720685781907!5m2!1sde!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
      
    </div>
  );
}
const container = [
    { id: 1, name: "1", description: "Kontakte" },
    { id: 2, name: "2", description: "Unsere Filiale" },
    { id: 3, name: "3", description: "Karte" },
    { id: 4, name: "4", description: "Lieferung" },
    { id: 5, name: "5", description: "Garantie" },
    { id: 6, name: "6", description: "Support/Service und Reparature" },
    { id: 7, name: "7", description: "Verkauf und Rückabgabe" },
    { id: 8, name: "8", description: "Nutzungsbedingungen" },

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

