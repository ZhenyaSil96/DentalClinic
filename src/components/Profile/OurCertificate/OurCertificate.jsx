import React from "react";
import classes from './OurCertificate.module.css'
import SimpleSlider from './SimpleSlider'

const OurCertificate = () => {
    return(
        <div className={classes.container}>
         <h2>Our Certificate 5</h2>
         <div className={classes.mainContent}>
             <div className={classes.person1}>
                 <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/002.jpg"/>
                 <h2>Certificate1</h2>
             </div>
             <div className={classes.person1}>
                 <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/002.jpg"/>
                 <h2>Certificate2</h2>
             </div>
             <div className={classes.person1}>
                 <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/002.jpg"/>
                 <h2>Certificate3</h2>
             </div>
             <div className={classes.person1}>
                 <img src="https://stomatology-lementa.com.ua/wp-content/uploads/2019/07/002.jpg"/>
                 <h2>Certificate4</h2>
             </div>
     </div>
     {/* <SimpleSlider/> */}
     </div>
    )

}

export default OurCertificate