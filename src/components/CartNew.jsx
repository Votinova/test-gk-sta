import React from 'react';
import '../styles/CartNew.css'

export const CartNew = (props) => {
  return (
    <div className='CartNew'>
        <img className='new-img' src={props.img} alt='img'/>
        <div className='new-info'>
            <div className='data'>
                {props.data}
            </div>
            <div className='new-text'>
                {props.text}
            </div>
        </div>
    </div>
  )
}
