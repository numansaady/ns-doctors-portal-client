import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';

const Info = () => {
    return (
        <div className='px-12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard cardTitle="Opening Our" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCard cardTitle="Our Locations" bgClass="bg-accent" img={marker}/>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}/>
        </div>
    );
};

export default Info;