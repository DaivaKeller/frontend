import React from 'react';
import './kontaktseite2.css';

const container = [
  { id: 1, name: "1", description: "Kontakten", link: "/kontakten" },
  { id: 2, name: "2", description: "Unsere Filiale", link: "./UnsereFiliale" },
  { id: 3, name: "3", description: "Karte", link: "./karte" },
  { id: 4, name: "4", description: "Lieferung", link: "./Lieferung" },
  { id: 5, name: "5", description: "Garantie", link: "./Garantieseite" },
  { id: 6, name: "6", description: "Support/Service/Reparature", link: "./SupportServiceReparature" },
  { id: 7, name: "7", description: "Rückgabe", link: "./Rückgabe" },
  { id: 8, name: "8", description: "Nutzungsbedingungen", link: "./Nutzungsbedingungen" },
];

function App() {
  return (
    <div className="container">
      {container.map((item) => (
        <a href={item.link} key={item.id} className="box-link">
          <div className="box">
            <h2>{item.description}</h2>
          </div>
        </a>
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

export default App;


