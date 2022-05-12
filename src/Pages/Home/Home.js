import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
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
            <ContactForm/>           
            <Footer/>
        </div>
    );
};

export default Home;