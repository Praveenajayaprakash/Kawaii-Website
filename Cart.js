
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from "../store/cartslice/Cartslice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  return (
    <div class="cart">
      {cartProducts.map((item, index) => (
        <div class="col-lg-3" key={index}>
          <div class="card">
            <div class="card-body">
              <img src={item.image}/>
              <div class="card-title">{item.name}</div>
              <div class="card-text">{item.foodtype}</div>
              <div class="card-price">Rs: {item.price}</div>
              <div class="cart-quantity-controls">
                <button onClick={() => decrementCart(item.id, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementCart(item.id, item.quantity)}>+</button>
              </div>
              <div class="cart-des">{item.des}</div>
              <div class="details">
                <button class="btn btn-danger" onClick={() => deleteCart(item)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
