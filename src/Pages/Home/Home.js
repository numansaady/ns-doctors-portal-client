import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <MakeAppointment/>
            <Testimonials/>
        </div>
    );
};

export default Home;