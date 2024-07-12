import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/terms-of-use">Nutzungsbedingungen</Link></li>
      </ul>
    </nav>
  );
};


const TermsOfUse = () => {
  return (
    <div>
      <h1>Nutzungsbedingungen</h1>
      <p>Willkommen auf unserer Website. Wenn Sie weiterhin auf dieser Website surfen und diese nutzen, erklären Sie sich damit einverstanden, die folgenden Nutzungsbedingungen einzuhalten und an diese gebunden zu sein, die zusammen mit unserer Datenschutzrichtlinie die Beziehung zwischen Ihnen und unserem Unternehmen in Bezug auf diese Website regeln.</p>
      <h2>Allgemeine Bedingungen</h2>
      <p>Die Inhalte dieser Seiten dienen ausschließlich Ihrer allgemeinen Information und Nutzung. Sie können ohne vorherige Ankündigung geändert werden.</p>
      <h2>Nutzung der Website</h2>
      <p>Diese Website verwendet Cookies, um die Browsing-Präferenzen zu überwachen. Wenn Sie Cookies zulassen, können die folgenden persönlichen Informationen von uns gespeichert werden: [Liste der gespeicherten Informationen].</p>
      <h2>Lizenz und Zugang zur Website</h2>
      <p>Wir gewähren Ihnen eine begrenzte Lizenz für den Zugang und die persönliche Nutzung dieser Website. Diese Lizenz umfasst nicht den Weiterverkauf oder die kommerzielle Nutzung dieser Website oder ihrer Inhalte.</p>
      {/* Weitere Abschnitte der Nutzungsbedingungen */}
    </div>
  );
};

export default TermsOfUse;

