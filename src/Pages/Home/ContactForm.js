import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const ContactForm = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="text-center py-5">
        <h3 className="text-primary text-xl">Connect Us</h3>
        <h2 className="text-4xl text-white">Stay Connected With Us</h2>
      </div>
      <div className="flex flex-col w-96 mx-auto">
        <input className="mb-3 h-10 rounded pl-2" type="email" placeholder="Email Address"  />
        <input className="mb-3 h-10 rounded pl-2" type="text" placeholder="Subject"  />
        <textarea placeholder="Your Message" className="h-16 rounded pl-2"></textarea>
        <div className="inline-block my-5 text-center">
        <PrimaryBtn>Submit</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
