import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function DogDetails({ dog }) {
  
  if (!dog) return <Redirect to="/dogs" />
  
  return (
    <div className='dogDetails'>
      <div className='dog'>
        <img src={dog.src} alt={dog.name} />
        <h1>{dog.name}</h1>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go back</Link>        
      </div>
    </div>
  );
}

export default DogDetails;
