import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div className='dogList'>
      <h1>Welcome!</h1>
      <h2>These dogs are available, click on them for more info.</h2>
      <div className='showDogs'>
        {dogs.map(dog => (
          <div key={dog.name}>
            <img src={dog.src} alt={dog.name} />
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
