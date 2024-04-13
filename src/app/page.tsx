"use client";

// pages/index.js
import React, { useState, useEffect } from 'react';
import { getProviders } from 'sats-connect';

export default function Home() {
  const [providers, setProviders] = useState([]);

  const handleButtonClick = async () => {
    const providersData = await getProviders();
    console.log(providersData); // Console log pour le débogage
    setProviders(providersData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button style={styles.button} type="button" onClick={handleButtonClick}>
          Get Providers
        </button>
      </div>
      {providers.length > 0 && (
        <div style={styles.card}>
          <pre>{JSON.stringify(providers, null, 2)}</pre>
        </div>
      )}
      <style jsx>{`
        body {
          background-color: #121212; // Mode sombre pour le body
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#121212',
  },
  buttonContainer: {
    marginTop: '20vh', // Espace au-dessus du bouton pour le centrer verticalement à l'initial
    width: '100%', // Prend toute la largeur pour centrer le bouton
    textAlign: 'center', // Centrage du bouton
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    border: '2px solid #0a58ca',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: 'white',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s',
    outline: 'none',
  },
  card: {
    marginTop: '10px', // Espace entre le bouton et la carte
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    width: '60%', // Taille réduite pour la carte
    textAlign: 'left',
    overflow: 'auto', // Permet le défilement si le contenu est trop grand
  }
};
