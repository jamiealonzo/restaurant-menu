import React from 'react';

const MenuItem = ({ name, price }) => {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
