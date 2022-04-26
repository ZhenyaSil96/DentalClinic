import React from "react";
import classes from './Contacts.module.css'
import phone from './phone.png'
import poshta from './poshta.png'
import facebook from './facebook.png'
import instagram from './instagram-new.png'
const Contacts = () => {
    return (
        <div className={classes.container}>
        <div className={classes.contentMain}>
            <h2>Контакти</h2>
            <div className={classes.InfoText}>

                <div>
                    <h2>Зв'язуйтесь з нами</h2>
                </div>

                <div className={classes.InfoText2}>
                    <div>
                        <h3>З усіх питань, що вас цікавлять</h3>
                    </div>

                    <div>
                        <h4>Приватна клініка надає всі види стоматологічних послуг як <br/>
                            для дорослих, так і для дітей. Якщо Ви живете на Салтівці, <br/>
                            простіше, зручніше і навіть дешевше буде звернутися до<br/>
                            стоматології «Лемент» на Гвардійців Широнінців у Харкові.<br/>
                            Добре, якщо у вас немає проблем із зубами, але гострий зубний <br/>
                            біль може з'явитися у будь-якої людини, в такі моменти треба <br/>
                            терміново їхати в лікарню і бажано знати заздалегідь, до кого<br/>
                             можна звернутися.
                        </h4>
                    </div>
                </div>

            </div>

            <div className={classes.contentInfo}>
                <div className={classes.contentPoshta}>
                    <div >
                        <img src={poshta} />
                    </div>
                    <div>
                        <h3>Пошта</h3>
                        <h3>stomatlementa71@gmail.com</h3>
                    </div>
                </div>
                <div className={classes.contentPhone}>
                    <div>
                        <img src={phone} />
                    </div>
                    <div>
                        <h3>Номер телефона</h3>
                        <h3>+38 (050) 838 39 67</h3>
                    </div>
                </div>
            </div>


            <div className={classes.contentMereji}>
                <div>
                    <h3>Ми у соцмережах:</h3>
                </div>
                <div>
                    <img src={facebook} />
                    <img src={instagram} />
                </div>
            </div>
        </div>
        </div>

    )
}
export default Contacts