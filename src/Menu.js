import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = () => {
  
  const items = [
    { name: 'Soup', price: '8.99' },
    { name: 'Salad', price: '10.99' },
    { name: 'Steak Fries', price: '14.99' },
    { name: 'Chicken', price: '18.99' },
    { name: 'Sandwich', price: '12.99' },
    { name: 'Garlic Bread', price: '7.99' },
    { name: 'Gelato', price: '3.99' },
    { name: 'Tiramisu', price: '7.99' },
    { name: 'Wine', price: '9.99' },
    { name: 'Coffee', price: '4.99' },
    { name: 'Soft Drink', price: '3.99' },
  ];

  console.log(items);

  return (
    <div className="menu">
      {items.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Menu;

