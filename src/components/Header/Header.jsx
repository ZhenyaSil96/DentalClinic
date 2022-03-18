import React from "react";
import classes from './Header.module.css'
import photo1 from './photo1.jpg'
import Navbar from "../Navbar/Navbar";
const Header = () => {
    return (
        <header className={classes.header}>
            <img src={photo1} />
            <Navbar/>

        </header>
    )
}
export default Header