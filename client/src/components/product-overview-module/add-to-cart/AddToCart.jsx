import React, { useState } from 'react';
import './AddToCart.scss';

import Button from '@mui/material/Button';

const AddToCart = ({ currentStyle }) => {
  const [currentSize, setCurrentSize] = useState('');
  const [quantity, setQuantity] = useState([]);

  //handles turning skus into array so that they can be mapped over
  const skus = Object.keys(currentStyle.skus).map((key) => {
    return currentStyle.skus[key];
  });

  console.log('skus:', skus);

  const handleChange = (e) => {
    setCurrentSize(e.target.value);
    let quantityArr = [];
    let currentQuantity;
    for (let i = 0; i < skus.length; i++) {
      if (skus[i].size === e.target.value) {
        if (skus[i].size >= 15) {
          currentQuantity = 15;
        } else {
          currentQuantity = skus[i].quantity;
        }
      }
    }
    console.log('currentSize:', currentSize);
    for (let i = 0; i < currentQuantity; i++) {
      quantityArr.push(i);
    }
    setQuantity(quantityArr);
    console.log('quantity:', quantity);
  };

  //typo in data - has two options with XL size
  if (skus.length) {
    skus[skus.length - 1].size = 'XXL';
  }
  ////////////////////////////////////////////

  return (
    <form>
      {skus.length ? (
        <>
          <select onChange={handleChange}>
            <option>Select Size</option>
            {skus.map((itemSize, index) => (
              <option key={index} label={itemSize.size}>
                {itemSize.size}
              </option>
            ))}
          </select>
          <select>
            <option>Select Quantity</option>
            {quantity.map((number) => (
              <option key={number} label={number}>
                {number}
              </option>
            ))}
          </select>
        </>
      ) : (
        <select disabled>
          <option>OUT OF STOCK</option>
        </select>
      )}
    </form>
  );
};

export default AddToCart;
