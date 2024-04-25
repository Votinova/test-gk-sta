import React from 'react';
import '../styles/News.css'
import { CartNew } from './CartNew';
import { storeNews } from '../store/store';

export const News = () => {
  return (
    <div className='news'>
        <div className='news-title'>
        Новости
        </div>
        <div className="cartsNews">
            {storeNews.map((list) => {
               return <CartNew img={list.img} data={list.data} text={list.text} key={list.id}/>
            })}
        </div>
    </div>
  )
}
