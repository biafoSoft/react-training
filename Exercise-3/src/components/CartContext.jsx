import React from 'react'

 const CartContext = createContext({
    // products:[],
    // cartItems:[],
    itemCount : 0,
    totalPrice: 0,
    addToCart:()=>{}, 
  });
  
function CartContext() {
  return (
    <div>CartContext</div>
  )
}

export default CartContext