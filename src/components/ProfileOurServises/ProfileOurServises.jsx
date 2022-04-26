import React from "react";
import classes from './ProfileOurServises.module.css'
const ProfileOurServises = () => {
    return (
        <div className={classes}>
            <h1>Наші послуги 1</h1>
            <div className={classes.mainContent}>
                <div className={classes.diagn}>
                    <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-320x200.jpg" />
                    <h2>Діагностика</h2>
                </div>
                <div className={classes.lik}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjv_QQIkEq5amxwD32jV2mGohPV836zR2yg&usqp=CAU" />
                    <h2>Лікування</h2>
                </div>
                <div className={classes.prot}>
                    <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-320x200.jpg" />
                    <h2>Протезування</h2>
                </div>
                <div className={classes.implant}>
                    <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-320x200.jpg" />
                    <h2>Імплантація</h2>
                </div>
                <div className={classes.vidal}>
                    <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-320x200.jpg" />
                    <h2>Видалення</h2>
                </div>
                <div className={classes.vuriv}>
                    <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-320x200.jpg" />
                    <h2>Вирівнювання</h2>
                </div>
                <div className={classes.estet}>
                    <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-320x200.jpg" />
                    <h2>Естетична стоматологія</h2>
                </div>
                <div className={classes.ditach}>
                    <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-320x200.jpg" />
                    <h2>Дитяча стоматологія</h2>
                </div>
            </div>
            <div className={classes.mainContentTwo}>
                <h2>Як ми працюємо</h2>
                
            </div>
        </div>
    )
}
export default ProfileOurServises