import React from "react";
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div className={classes.container}>
        <div className={classes.mainContent}>
            <div>
                <h2>
                    Телефон:<br/>
                    +38 (073) 499 67 77
                </h2>
            </div>


            <div>
               <h2> 
                ул. Сумская 71 <br/>
                пн-cб: с 10:00 до 19:00
                </h2>
            </div>
        </div>
        </div>

    )
}
export default Footer