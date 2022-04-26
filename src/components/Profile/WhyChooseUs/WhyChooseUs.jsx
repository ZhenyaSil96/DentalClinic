import React from "react";
import classes from './WhyChooseUs.module.css'
import background from './IMG_2290.jpg'
import photo2 from './2051619.jpg'
var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`
};

const WhyChooseUs = () => {
    return (
        <div className={classes.container}>
        <div className={classes.mainContent} >
            <h2>Чому обирають НАС 3</h2>
            <div className={classes.infoOne}>
                <div className={classes.contentOne}>
                    <img src={photo2} />
                    <h3>Доступні ціни</h3>
                </div>
                <div  className={classes.contentThree}>
                    <img src={photo2} />
                    <h3>Гарантія на роботу</h3>
                </div>
                <div  className={classes.contentFour}>
                    <img src={photo2} />
                    <h3>Зручний графік</h3>
                </div>
                <div  className={classes.contentFive}>
                    <img src={photo2} />
                    <h3>Найкращі лікарі</h3>
                </div>
                <div  className={classes.contentSix}>
                    <img src={photo2} />
                    <h3>Безготівковій розрахунок</h3>
                </div>
                <div  className={classes.contentEight}>
                    <img src={photo2} />
                    <h3>Зручне розташування</h3>
                </div>
</div>
            </div>
        </div>
    )
}

export default WhyChooseUs