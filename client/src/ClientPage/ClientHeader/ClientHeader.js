import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './ClientHeader.module.css';

 const ClientHeader = () => {
     return(
         <div className={classes.ClientHeader}>
             <nav className={classes.nav}>
                 <NavLink to='/clientpage/registration' className={classes.button1}>РЕГИСТРАЦИЯ</NavLink>
                <NavLink to='/clientpage/listofgoodsclient' className={classes.button1}>СПИСОК ТОВАРА</NavLink>
                <NavLink to='/clientpage/orderdetail' className={classes.button1}>ЗАКАЗ</NavLink>
                
                
            </nav>
         </div>
     );
 }

 export default ClientHeader;