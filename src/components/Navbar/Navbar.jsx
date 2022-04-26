import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (

        <nav className={classes.nav}>

            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/profile' >
                Головна
                    <span></span><span></span><span></span><span></span>
                </NavLink>
            </div>

            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/price' >
                Послуги
                    <span></span><span></span><span></span><span></span>
                </NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/about'>
                    Про нас
                    <span></span><span></span><span></span><span></span>
                </NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/our_person'>
                    Спеціалісти
                    <span></span><span></span><span></span><span></span>
                </NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/contacts' >
                    Контакти
                    <span></span><span></span><span></span><span></span>
                </NavLink>
            </div>
        </nav>

    )
}
export default Navbar