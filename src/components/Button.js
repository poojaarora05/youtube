import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className='px-5 m-2 py-2 rounded-lg bg-gray-200'>{name}</button>
    </div>
  );
};

export default Button;
