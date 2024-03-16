import React, { useState } from 'react';
import '../components/Home.css'

const MyTextField = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter email to get updates"
        className='textfield'
      />
    </div>
  );
};

export default MyTextField;