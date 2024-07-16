import React, { useState } from 'react';
import '../UnsereFiliale.css';

function UnsereFiliale() {
  const [formData, setFormData] = useState({
    name: 'Max Musterman',
    email: 'techshop@online.de',
    filiale: 'München, Sonnenstr.3',
    message: ''
  });

  const filialen = [
    'München, Sonnenstr.3',
    'Berlin, Mondstrasse 2',
    'Heidelberg, Windstrasse 1',
    'Bremen, Seestrasse 11'
  ];

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
    <main className="form-container">
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Filiale:
            <select
              name="filiale"
              value={formData.filiale}
              onChange={handleChange}
              required
            >
              {filialen.map((filiale, index) => (
                <option key={index} value={filiale}>
                  {filiale}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Nachricht:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        <button type="submit">Senden</button>
      </form>
    </main>
  );
}

export default UnsereFiliale;


