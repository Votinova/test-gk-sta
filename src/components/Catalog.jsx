import React from 'react'
import { Cart } from './Cart'
import { storeCart } from '../store/store';
import '../styles/catalog.css'

export const Catalog = () => {
  return (
    <div>
        <div className='catalog-technic'>
            <span className='title'>
                Каталог техники    
            </span>
            <div className='carts'>
                <Cart img={storeCart.komatsu.img} text={storeCart.komatsu.text} />
                <Cart img={storeCart.epiroc.img} text={storeCart.epiroc.text} />
                <Cart img={storeCart.manitou.img} text={storeCart.manitou.text}/>
                <Cart img={storeCart.hensley.img} text={storeCart.hensley.text}/>
                <Cart img={storeCart.kvx.img} text={storeCart.kvx.text}/>
            </div>
        </div>
        <div className='catalog-parts'>
            <span className='title'>
            Каталог запчастей
            </span>
            <div className='carts'>
                <Cart img={storeCart.komatsu.img} text={storeCart.komatsu.text}/>
                <Cart img={storeCart.epiroc.img} text={storeCart.epiroc.text}/>
                <Cart img={storeCart.manitou.img} text={storeCart.manitou.text}/>
                <Cart img={storeCart.group.img} text={storeCart.group.text}/>
            </div>
        </div>
    </div>
  )
}
