import React from 'react';
import '../styles/Cart.css';
export const Cart = (props) => {
  return (
    <div className='cart'>
        <img src={props.img} alt='Image' className='imgCart'/>
        <div className='textCart'>{props.text}</div>
    </div>
  )
}
