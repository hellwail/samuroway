import React from "react";
import css from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink to='/profile' className = { navData => navData.isActive ? css.active : css.item }>Profile</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='/dialogs' className = { navData => navData.isActive ? css.active : css.item }>Messages</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='news' className = { navData => navData.isActive ? css.active : css.item }>News</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='music' className = { navData => navData.isActive ? css.active : css.item }>Music</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to='settings' className = { navData => navData.isActive ? css.active : css.item }>Settings</NavLink>
      </div>
    </nav>
  )
}

export default NavBar ;