
import React, { useState } from 'react';

function Lieferung() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    deliveryOption: 'Standard',
    additionalInfo: ''
  });

  const deliveryOptions = [
    'Standard - Lieferung innerhalb von 5-7 Werktagen',
    'Express - Lieferung innerhalb von 2-3 Werktagen',
    'Overnight - Lieferung am nächsten Werktag'
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
    alert('Ihre Lieferanfrage wurde erfolgreich übermittelt:\n' + JSON.stringify(formData, null, 2));
    // Hier könnte der Code für das Absenden der Formulardaten an den Server stehen
    // Zum Beispiel mit fetch() oder einer anderen Methode zur Datenübermittlung.
  };

  return (
    <main>
      <h2>Lieferung</h2>
      <p>Wählen Sie Ihre bevorzugte Lieferoption und geben Sie Ihre Lieferadresse ein.</p>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
          <label>
            Adresse:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
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
              required
            />
          </label>
        </div>
        <div>
          <label>
            Telefon:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Lieferoption:
            <select
              name="deliveryOption"
              value={formData.deliveryOption}
              onChange={handleChange}
              required
            >
              {deliveryOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Zusätzliche Informationen:
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <button type="submit">Lieferung anfordern</button>
      </form>
    </main>
  );
}

export default Lieferung;
