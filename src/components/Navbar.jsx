import React from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className='Navbar'>
            <p className='logo'>LOGO</p>
            <p className='text'>Запчасти и спецтехника для горнодобывающей отрасли</p>
            <div className='contacts'>
                <span>frontend.test@mail.ru</span>
                <span>+7 499 999-99-99</span>
            </div>
    </div>
  )
}
