import React from 'react';
import { Link } from 'react-router-dom';

function Color({ hex, color, history }) {
  if (!hex) {
    history.push('/colors');
  }

  return (
    <div className='color' style={{ backgroundColor: hex }}>
      <div>This is {color}.</div>
      <div>Isn't it beautiful?</div>
      <div>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default Color;
