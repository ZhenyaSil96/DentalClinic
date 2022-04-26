import React from "react";
import ReactFontFace from 'react-font-face'
import background from './background13.jpg'
import classes from './HeaderInformationClinic.module.css'

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`
};

const HeaderInformationClinic = () => {
    return (
        <div className={classes.container}>
        <div className={classes.mainContent} style={sectionStyle}>
            <h3>
            Клініка Стоматології Dr. Лужецького та Dr Гуняка надає всі види стоматологічних <br/>
            послуг понад 17 років. <br/>
            </h3>
            <h3>
                Висококваліфіковані лікарі, сучасні технології та методи лікування, комп'ютерна<br/>
                діагностика, високий сервіс і це все ми надаємо для вашого комфорту, заощадження часу та <br/>
                коштів в одній клініці.
            </h3>
            <h3>
                Наша команда стоматологів вирішить проблему пацієнта безболісно, якою би складною вона <br/>
                не була, з відповідальністю за результат, який буде бездоганний.
            </h3>
        </div>
        </div>
    )
}
export default HeaderInformationClinic