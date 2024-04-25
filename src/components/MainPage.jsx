import React from 'react';
import '../styles/MainPage.css';

export const MainPage = () => {
  return (
    <div className='mainPage'>
        <div className='container'>
            <div className='header'>Официальные диллеры Komatsu, Epiroc и Manitou в России</div>
                <ul className='info'>
                    <li>Подор техники под ваши задачи</li>
                    <li>Выкуп и доставка оборудования</li>
                    <li>Техническое обслуживание 24/7</li>
                </ul>
                <div className='request'>Оставьте заявку по почте frontend.test@mail.ru.
                    Наши менеджеры свяжутся с вами в течение 15 минут.
                </div>
        </div>
    </div>
  )
}
