import React from 'react';
import './Main.css';
import backgroundImg from '..//../background.png';
import AnimalList from '../Animal/AnimalList';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        <AnimalList animals = { animals } />
      }
    </main>
  );
}
