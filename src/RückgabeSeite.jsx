import React, { useState } from 'react';

const RückgabeSeite = () => {
    const [orderId, setOrderId] = useState('');
    const [reason, setReason] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Hier könnte der Code für das Absenden der Formulardaten an den Server stehen.
        // Zum Beispiel mit fetch() oder einer anderen Methode zur Datenübermittlung.
        console.log({ orderId, reason, email });
        alert('Ihre Rückgabeanforderung wurde erfolgreich übermittelt!');
    };

    return (
        <div className="container">
            <h1>Rückgabe</h1>
            <p>Wir hoffen, dass Sie mit Ihrem Kauf zufrieden sind. Wenn Sie jedoch einen Artikel zurückgeben möchten, helfen wir Ihnen gerne dabei. Bitte lesen Sie unsere Rückgaberichtlinien und füllen Sie das untenstehende Formular aus.</p>
            <h2>Rückgaberichtlinien</h2>
            <ul>
                <li>Rückgaben sind innerhalb von 30 Tagen nach dem Kaufdatum möglich.</li>
                <li>Artikel müssen in ihrem ursprünglichen Zustand und in der Originalverpackung zurückgegeben werden.</li>
                <li>Bestimmte Artikel sind vom Umtausch ausgeschlossen, z. B. personalisierte Produkte und Unterwäsche.</li>
            </ul>
            <h2>Rückgabeformular</h2>
            <form id="returnForm" onSubmit={handleSubmit}>
                <label htmlFor="orderId">Bestellnummer</label>
                <input 
                    type="text" 
                    id="orderId" 
                    name="orderId" 
                    value={orderId} 
                    onChange={(e) => setOrderId(e.target.value)} 
                    required 
                />

                <label htmlFor="reason">Grund für die Rückgabe</label>
                <textarea 
                    id="reason" 
                    name="reason" 
                    value={reason} 
                    onChange={(e) => setReason(e.target.value)} 
                    required 
                ></textarea>

                <label htmlFor="email">Ihre E-Mail-Adresse</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <button type="submit">Rückgabe anfordern</button>
            </form>
        </div>
    );
}

export default RückgabeSeite;
