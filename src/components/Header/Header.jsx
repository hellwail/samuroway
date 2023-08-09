import React from "react";
import logo from '../../assets/logo.png'
import css from './Header.module.css'

const Header = () => {
    return (
        <header className={css.header}>
            <img className={css.logo} src={logo} alt='logo'/>
        </header>
    )
}

export default Header;