import React from "react";
import classes from './About.module.css'
import background from './background13.jpg'
import photo1 from './01.jpg'
var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`
};
const About = () => {
    return (
        <div className={classes.container}>
        <div className={classes.mainContent}>
            <h2>Про нас</h2>
            <div className={classes.blockContent} style={sectionStyle}>
                <div className={classes.blockContentOne_Two}>

                    <div className={classes.blockOne}>
                        <div>
                            <h2>ДОСВІД РОБОТИ</h2>
                        </div>
                        <div>
                            <h3>17 РОКІВ</h3>
                        </div>
                    </div>

                    <div className={classes.blockTwo}>
                        <div>
                            <h2>ЗАДОВОЛЕНИХ КЛІЄНТІВ</h2>
                        </div>
                        <div>
                            <h3>11000</h3>
                        </div>
                    </div>
                </div>

                <div className={classes.blockContentThree_Four}>

                    <div className={classes.blockThree}>
                        <div>
                            <h2>ЗУБІВ ВИЛІКУВАЛИ </h2>
                        </div>
                        <div>
                            <h3>286 000+</h3>
                        </div>
                    </div>

                    <div className={classes.blockFour}>
                        <div>
                            <h2>ЧУДОВИХ ПОСМІШОК</h2>
                        </div>
                        <div>
                            <h3>3000</h3>
                        </div>
                    </div>
                </div>
            </div>
            <h1>
                Фотогалерея
            </h1>
            <div className={classes.contentPhoto}>
                <div className={classes.person1}>
                    <img src={photo1} />
                </div>
                <div className={classes.person1}>
                    <img src={photo1} />
                </div>
                <div className={classes.person1}>
                    <img src={photo1} />
                </div>
                <div className={classes.person1}>
                    <img src={photo1} />
                </div>
                <div className={classes.person1}>
                    <img src={photo1} />
                </div>
                <div className={classes.person1}>
                    <img src={photo1} />
                </div>
            </div>

            <div className={classes.blockContentOtziv}>
                <h1>Наші задоволені клієнти</h1>
                <div>
                    <h3>
                        Людмила
                    </h3>
                    <h4>
                        Нарешті, я знайшла свого стоматолога.<br />
                        Робила реставрацію зубів.<br />
                        Дуже акуратний та уважний лікар.<br />
                        Спасибі вам велике!!!<br />
                        Тепер, тільки до вас!<br />
                    </h4>
                </div>
                <div>
                    <h3>
                        Людмила
                    </h3>
                    <h4>
                        Нарешті, я знайшла свого стоматолога.<br />
                        Робила реставрацію зубів.<br />
                        Дуже акуратний та уважний лікар.<br />
                        Спасибі вам велике!!!<br />
                        Тепер, тільки до вас!<br />
                    </h4>
                </div>
                <div>
                    <h3>
                        Людмила
                    </h3>
                    <h4>
                        Нарешті, я знайшла свого стоматолога.<br />
                        Робила реставрацію зубів.<br />
                        Дуже акуратний та уважний лікар.<br />
                        Спасибі вам велике!!!<br />
                        Тепер, тільки до вас!<br />
                    </h4>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About