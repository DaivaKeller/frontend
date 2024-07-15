import React, { useState } from 'react';

function SupportServiceReparatur() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issueType: 'Support',
    orderId: '',
    message: ''
  });

  const issueTypes = [
    'Support',
    'Service',
    'Reparatur'
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
    alert('Ihre Anfrage wurde erfolgreich übermittelt:\n' + JSON.stringify(formData, null, 2));
    // Hier könnte der Code für das Absenden der Formulardaten an den Server stehen
    // Zum Beispiel mit fetch() oder einer anderen Methode zur Datenübermittlung.
  };

  return (
    <main>
      <h2>Support/Service und Reparatur</h2>
      <p>Wenn Sie Unterstützung benötigen, einen Service anfragen oder eine Reparatur durchführen lassen möchten, füllen Sie bitte das untenstehende Formular aus.</p>
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
            Art der Anfrage:
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              required
            >
              {issueTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Bestellnummer (falls zutreffend):
            <input
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
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
        <button type="submit">Anfrage senden</button>
      </form>
    </main>
  );
}

export default SupportServiceReparatur;
