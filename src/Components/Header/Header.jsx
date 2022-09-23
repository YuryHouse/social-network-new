import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img alt='' src='https://www.designevo.com/images/home/2-5-0/shape-and-letter-s.webp' />
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;