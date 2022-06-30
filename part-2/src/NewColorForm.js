import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function NewColorForm({ addColor }) {
  const [form, updateForm] = useState({ name: '', hex: '#ffffff' });
  const history = useHistory();

  function handleChange(e) {
    e.persist();
    updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    history.push('/colors');
  }

  const { hex, name } = form;

  return (
    <div className='newColor'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Color name</label>
          <input
            name='name'
            id='name'
            placholder='Enter color name'
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='hex'>Color value</label>
          <input
            type='color'
            name='hex'
            id='hex'
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
  );
}

export default NewColorForm;
