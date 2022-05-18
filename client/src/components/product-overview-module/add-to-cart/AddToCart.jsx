import React, { useState } from 'react';
import './AddToCart.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddToCart = ({ currentStyle }) => {
  const [currentSize, setCurrentSize] = useState('');
  const [purchaseQuantity, setPurchaseQuantity] = useState(0);
  const [quantity, setQuantity] = useState([]);

  //handles turning skus into array so that they can be mapped over
  const skus = Object.keys(currentStyle.skus).map((key) => {
    return currentStyle.skus[key];
  });

  //handles when size is selected to get correct quantity and size options
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
    for (let i = 1; i < currentQuantity; i++) {
      quantityArr.push(i);
    }
    setQuantity(quantityArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //typo in data - has two options with XL size
  if (skus.length) {
    skus[skus.length - 1].size = 'XXL';
  }
  ////////////////////////////////////////////

  //handles changing state when choosing quantity
  const handleSelectQuantity = (e) => {
    setPurchaseQuantity(e.target.value);
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      {skus.length ? (
        <>
          <select className='form-select-size' required onChange={handleChange}>
            <option value=''>Select Size</option>
            {skus.map((itemSize, index) => (
              <option key={index} label={itemSize.size}>
                {itemSize.size}
              </option>
            ))}
          </select>
          <select className='form-quantity' required>
            {quantity.length ? <option>1</option> : <option disabled>-</option>}
            {quantity.map((number) => (
              <option key={number} label={number}>
                {number}
              </option>
            ))}
          </select>
          <Button className='form-button' variant='contained' type='submit'>
            Add To Cart
          </Button>
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
