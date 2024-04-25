import React from 'react'
import { CartAdvantages } from './CartAdvantages'
import { storeAdvanteges } from '../store/store';
import '../styles/Advantages.css'

export const Advantages = () => {
  return (
    <div className='back'>
        <div className='advantages'>
            <div className='advantages-title'>
                Наши преимущества
            </div>
            <div className='cartsAdvanteges'>
                {storeAdvanteges.map( adv => {
                    return <CartAdvantages key={adv.id} img={adv.img} title={adv.title} text={adv.text} />
                })}
            </div>
        </div>
    </div>
  )
}
