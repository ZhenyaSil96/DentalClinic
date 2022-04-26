import React from "react";
import classes from './Header.module.css'
import photo1 from './photo1.jpg'
import Navbar from "../Navbar/Navbar";
const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
            <div className={classes.twoBlocks}>
            <div className={classes.headerlogo}>
                        <img src={photo1} />
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}
export default Header