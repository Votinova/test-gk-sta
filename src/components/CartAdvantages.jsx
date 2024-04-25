import React from 'react';
import '../styles/CartAdvantages.css'

export const CartAdvantages = (props) => {
  return (
    <div className='cartAdvantages'>
        <img src={props.img} alt='image' />
        <div className='info'>
            <div className='titleAdvantages'>
                {props.title}
            </div>
            <div className='textAdvantages'>
                {props.text}
            </div>
        </div>
    </div>
  )
}
