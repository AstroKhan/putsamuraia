import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
    <img src="https://i.pinimg.com/236x/da/8d/3c/da8d3c180a80a0f10a7f009a08466186.jpg"/>
    <div className={s.loginBlock}>
    { props.isAuth ? props.login
       : <NavLink to={"/login"}>Login</NavLink>
    }   
    </div>
    </header>
    )
}

export default Header;