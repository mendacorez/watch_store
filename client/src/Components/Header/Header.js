import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <span>Watches Shop</span>
    <nav className={classes.nav}>
      <NavLink to='/clientpage' className={classes.button1}>ДЛЯ КЛИЕНТА</NavLink>
      <NavLink to='/adminpage' className={classes.button1}>ДЛЯ АДМИНИСТРАТОРА</NavLink>
    </nav>
  </header>
)

export default Header;