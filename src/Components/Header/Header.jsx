import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img alt='' src='https://www.designevo.com/images/home/2-5-0/shape-and-letter-s.webp' />
            <div className={style.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;