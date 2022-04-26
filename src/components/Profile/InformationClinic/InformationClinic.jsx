import React from "react";
import classes from './InformationClinic.module.css'
import background from './IMG_2129.png'
import background1 from './IMG_2174.png'
import icons from './icons.png'

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`
};

var sectionStyle1 = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background1})`
};


const InformationClinic = () => {
    return (
        <div className={classes.container}>
            <h2>Information clinic 2</h2>
            <div className={classes.mainContent}>
                <div className={classes.infoOne} style={sectionStyle}>
                    {/* <h3>Знайомтеся
                        Стоматологічна клініка – це те місце, куди приходять <br />
                        сім'ями,де всі співробітники раді бачити будь-кого та кожному нададуть<br />
                        кваліфіковану допомогу. Тут працюють лікарі, яких можна назвати<br />
                        не лише справжніми професіоналами своєї справи, а й просто людьми,<br />
                        які люблять свою роботу та роблять її добре та із задоволенням!</h3> */}
                        <div className={classes.infoOneContentOne} >
                    <h3>Доступні ціни  </h3>  <img src={icons}/>
                    </div>
                    <div className={classes.infoOneContentTwo} >
                    <h3>Гарантія на роботу  </h3>  <img src={icons}/>
                    </div>
                    <div className={classes.infoOneContentThree} >
                    <h3>Зручний графік </h3>  <img src={icons}/>
                    </div>
                    <div className={classes.infoOneContentFour} >
                    <h3>Найкращі лікарі</h3> <img src={icons}/> 
                    </div>
                    <div className={classes.infoOneContentFive} >
                    <h3>Безготівковий розрахунок</h3> <img src={icons}/> 
                    </div>
                    <div className={classes.infoOneContentSix} >
                    <h3>Зручне розташування</h3> <img src={icons}/> 
                    </div>
                </div>
                <div className={classes.infoTwo} style={sectionStyle1}>
                    <div className={classes.infoTwoContentOne} >
                    <h3>ДОСВІД РОБОТИ більше</h3> <h2>17 РОКІВ</h2>
                    </div>
                    <div className={classes.infoTwoContentTwo}>
                    <h3>ЗАДОВОЛЕННИХ КЛІЄНТІВ більше </h3> <h2>11000</h2>
                    </div>
                    <div className={classes.infoTwoContentThree}>
                    <h3>ЗУБІВ ВИЛІКУВАЛИ</h3> <h2>286 000+</h2>
                    </div>
                    <div className={classes.infoTwoContentFour}>
                    <h3>ЧУДОВИХ ПОСМІШОК</h3> <h2>3000</h2>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default InformationClinic