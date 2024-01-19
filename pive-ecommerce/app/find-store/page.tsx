import React from 'react';
import './FindStore.css';

const FindStore = () => {
  const storeAddress = 'Wrocławska 29, 58-200 Dzierżoniów, Polska';
  const googleMapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(storeAddress)}&output=embed`;

  return (
    <div className="find-store-container">
      <div className="text-container"> {/* Dodana nowa zawijająca div */}
        <div className="store-info">
          <h2>Nasz Sklep Stacjonarny</h2>
          <p>Zapraszamy do odwiedzenia naszego sklepu stacjonarnego w Dzierżoniowie!</p>
        </div>
        <div className="online-stores">
          <h3>Nasze Sklepy Internetowe</h3>
          <p>Odwiedź również nasze sklepy internetowe:</p>
          <ul>
            <li><a className="store-link" href="https://allegro.pl/uzytkownik/twój_użytkownik">Nasz sklep na Allegro</a></li>
            <li><a className="store-link" href="https://www.olx.pl/oferty/uzytkownik/twój_użytkownik">Nasz sklep na OLX</a></li>
          </ul>
        </div>
      </div>
      <div className="store-map">
        <iframe
          title="Lokalizacja Sklepu"
          className="map-iframe"
          frameBorder="0"
          scrolling="no"
          src={googleMapsSrc}
        />
      </div>
    </div>
  );
};

export default FindStore;
