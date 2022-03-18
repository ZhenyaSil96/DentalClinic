import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.item}>Головна</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/poslygu' className={navData => navData.isActive ? classes.active : classes.item}>Послуги</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/price' className={navData => navData.isActive ? classes.active : classes.item}>Ціна</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/about' className={navData => navData.isActive ? classes.active : classes.item}>О нас</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/photo_work' className={navData => navData.isActive ? classes.active : classes.item}>Фото робіт</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/contacts' className={navData => navData.isActive ? classes.active : classes.item}>Контакти</NavLink>
            </div>

        </nav>
    )
}
export default Navbar