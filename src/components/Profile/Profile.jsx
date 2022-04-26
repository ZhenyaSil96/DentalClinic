import React from "react";
import classes from './Profile.module.css'
import OurServices from './OurServices/OurServices'
import InformationClinic from './InformationClinic/InformationClinic'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import OurPersonal from './OurPersonal/OurPersonal'
import OurCertificate from './OurCertificate/OurCertificate'
import HeaderInformationClinic from "./HeaderInformationClinic/HeaderInformationClinic";
// import SimpleMap from "./Map/Map/Map"
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;




const Profile = () => {
    const defaultProps = {
        center: {
          lat: 49.2765184,
          lng: 23.5240788
        },
        zoom: 11
      };
    return (
      <div className={classes.container}>
            <HeaderInformationClinic/>
            <OurServices/>
            <InformationClinic/>
            <WhyChooseUs/>
            <OurPersonal/>
            <OurCertificate/>

            <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={49.2765184}
          lng={23.5240788}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </div>
    )
}

export default Profile