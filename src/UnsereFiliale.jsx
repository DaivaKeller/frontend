import React from 'react';
import { useState } from "react";

function UnsereFiliale() {
  const [formData, setFormData] = useState({
    name: 'Max Musterman',
    email: 'techshop@online.de',
    Filiale: 'München, Berlin, Heidelberg, Hamburg',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Nachricht gesendet:\n' + JSON.stringify(formData, null, 2));
    // Hier könnten Sie die Nachricht an einen Server senden
  };

  return (
    <main>
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            
            />
           </label>
        </div>
        <div>
          <label>
            Filiale:
            <input
              type= "Filiale"
              name="Filiale"
              value={formData.message}
              onChange={handleChange} 
            />
          </label>
        </div>
        <button type="submit">Senden</button>
      </form>
    </main>
  );
}

export default UnsereFiliale;
