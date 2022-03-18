import React from "react";
import classes from './Profile.module.css'
import OurServices from './OurServices/OurServices'
import InformationClinic from './InformationClinic/InformationClinic'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import OurPersonal from './OurPersonal/OurPersonal'
import OurCertificate from './OurCertificate/OurCertificate'



const Profile = () => {
    return (
        <div>
            <OurServices/>
            <InformationClinic/>
            <WhyChooseUs/>
            <OurPersonal/>
            <OurCertificate/>

        </div>
    )
}

export default Profile