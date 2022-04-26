import React from "react";
import classes from './OurPerson.module.css'
import photo1 from './IMG-0963.jpg'
import photo2 from './IMG-0989.jpg'
import photo3 from './IMG-0968.jpg'
import photo4 from './IMG-1005.jpg'
import photo5 from './IMG-1007.jpg'
import photo6 from './IMG-1011.jpg'
const OurPerson = () => {
    return (
        <div>
            
            <div className={classes.container}>
            <h2>Наші Спеціалісти</h2>
            <div className={classes.mainContentOurPersonal}>


                <div className={classes.person1}>
                    <img src={photo1} />
                    <h2>Матвей Пупкін</h2>
                </div>
                <div className={classes.person1}>
                    <img src={photo2} />
                    <h2>Матвей Пупкін</h2>
                </div>
                <div className={classes.person1}>
                    <img src={photo3} />
                    <h2>Матвей Пупкін</h2>
                </div>
                <div className={classes.person1}>
                    <img src={photo4} />
                    <h2>Матвей Пупкін</h2>
                </div>
                <div className={classes.person1}>
                    <img src={photo5} />
                    <h2>Матвей Пупкін</h2>
                </div>
                <div className={classes.person1}>
                    <img src={photo6} />
                    <h2>Матвей Пупкін</h2>
                </div>
            </div>
            </div>
        </div>
    )
}
export default OurPerson 