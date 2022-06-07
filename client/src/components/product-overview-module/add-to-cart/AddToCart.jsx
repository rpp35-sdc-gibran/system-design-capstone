import React, { useState } from 'react';
import './AddToCart.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const AddToCart = ({ currentStyle }) => {
   const [currentSize, setCurrentSize] = useState('');
   const [purchaseQuantity, setPurchaseQuantity] = useState(0);
   const [quantity, setQuantity] = useState([]);
   const [currentSku, setCurrentSku] = useState(null);
   const [openAlert, setOpenAlert] = useState(false);

   //handles turning skus into array so that they can be mapped over
   const skus = Object.keys(currentStyle.skus).map((key) => {
      return { itemSku: key, itemValues: currentStyle.skus[key] };
   });

   //handles when size is selected to get correct quantity and size options
   const handleChange = (e) => {
      setCurrentSize(e.target.value);
      let quantityArr = [];
      let currentQuantity;
      for (let i = 0; i < skus.length; i++) {
         if (skus[i].itemValues.size === e.target.value) {
            setCurrentSku(skus[i].itemSku);
            if (skus[i].itemValues.quantity >= 15) {
               currentQuantity = 15;
            } else {
               currentQuantity = skus[i].itemValues.quantity;
            }
         }
      }

      for (let i = 1; i <= currentQuantity; i++) {
         quantityArr.push(i);
      }
      setQuantity(quantityArr);
   };

   //handles adding item to cart
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!currentSku) {
         return;
      } else {
         let promise = axios.post('/api/cart', { sku_id: currentSku });
         promise.then((response) => {
            setOpenAlert(true);
         });
         promise.catch((err) => {
            console.log('err:', err);
         });
      }
   };

   //typo in data - has two options with XL size
   if (skus.length) {
      skus[skus.length - 1].itemValues.size = 'XXL';
   }
   ////////////////////////////////////////////

   //handles changing state when choosing quantity
   const handleSelectQuantity = (e) => {
      setPurchaseQuantity(e.target.value);
   };

   const handleGettingSku = (sku) => {
      console.log('sku in handle getting sku func:', sku);
   };

   return (
      <form className='form' onSubmit={handleSubmit}>
         {skus.length ? (
            <>
               <select
                  data-testid='select-size'
                  className='form-select-size'
                  required
                  onChange={handleChange}
               >
                  <option value=''>Select Size</option>
                  {skus.map((itemSize, index) => (
                     <option
                        data-testid='select-size-option'
                        key={index}
                        onChange={() => handleGettingSku(itemSize.itemSku)}
                        value={itemSize.itemValues.size}
                        label={itemSize.itemValues.size}
                     >
                        {itemSize.itemValues.size}
                     </option>
                  ))}
               </select>
               <select
                  data-testid='select-quantity'
                  className='form-quantity'
                  required
               >
                  {quantity.length ? (
                     quantity.map((number) => (
                        <option
                           data-testid='select-quantity-option'
                           key={number}
                           label={number}
                        >
                           {number}
                        </option>
                     ))
                  ) : (
                     <option data-testid='default-quantity' disabled={true}>
                        -
                     </option>
                  )}
               </select>
               <Button
                  className='form-button'
                  variant='contained'
                  type='submit'
                  aria-label='add item to cart'
               >
                  Add To Cart
               </Button>
            </>
         ) : (
            <select disabled>
               <option>OUT OF STOCK</option>
            </select>
         )}
         <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openAlert}
            color='success'
            autoHideDuration={5000}
            onClose={() => setOpenAlert(false)}
         >
            <Alert severity='success'>Item has been added to your cart!</Alert>
         </Snackbar>
      </form>
   );
};

export default AddToCart;
