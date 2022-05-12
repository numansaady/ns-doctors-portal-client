import React from "react";
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryBtn from "../Shared/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section style={{background: `url(${appointment})`}}>
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <img className="mt-[-100px]" src={doctor} alt="" />
        </div>
        <div className="flex-1 text-white">
          <h3 className="text-primary text-xl">Appointment</h3>
          <h2 className="text-3xl my-4">Make an appointment Today</h2>
          <p className="pr-5 mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
