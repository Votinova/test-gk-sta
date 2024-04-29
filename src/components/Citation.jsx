import React from 'react';
import '../styles/Citation.css'

export const Citation = () => {
    return (
    <div className='citation'>
        <div className='citation-title'>
            Цитаты — лучший способ изучения мыслителей от Древнего мира до современности!
        </div>
        <div className="cication-place">
            <h1>
            Место под вашу цитату
            </h1>
            <h2>
            © Автор цитаты
            </h2>
        </div>
        <div className='take-citation'>
            <div>
            Жми на кнопку и развивайся!
            </div>
            <div>
                <button className='citation-button'>
                Узнать цитату
                </button>
            </div>
        </div>
    </div>
  )
}
