import React from 'react';
const Garantieseite = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Garantieerklärung</h1>
          <nav>
            <ul>
              <li><a href="#">Startseite</a></li>
              <li><a href="#">Garantiebedingungen</a></li>
              <li><a href="#">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="main-content">
          <h2>Unsere Garantie</h2>
          <p>Wir bieten eine 2-jährige Garantie auf alle unsere Produkte. Diese Garantie deckt alle Fabrikationsfehler und Materialmängel ab.</p>
          <h3>Garantiebedingungen</h3>
          <ul>
            <li>Die Garantiezeit beginnt mit dem Kaufdatum.</li>
            <li>Bitte bewahren Sie Ihren Kaufbeleg als Nachweis auf.</li>
            <li>Die Garantie gilt nur für den ursprünglichen Käufer.</li>
            <li>Von der Garantie ausgenommen sind Schäden durch unsachgemäße Verwendung, normale Abnutzung und äußere Einwirkungen.</li>
          </ul>
          <h3>Wie man einen Garantieanspruch geltend macht</h3>
          <p>Um einen Garantieanspruch geltend zu machen, kontaktieren Sie uns bitte unter <a href="mailto:service@example.com">service@example.com</a> mit einer Beschreibung des Problems und einer Kopie Ihres Kaufbelegs.</p>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Ihr Unternehmen. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Garantieseite;

