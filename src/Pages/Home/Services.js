import React from "react";
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1, 
            name: "Fluoride Treatment", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla facilis quaerat ",
            img: fluoride
        },
        {
            _id: 2, 
            name: "Cavity Filling", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla facilis quaerat",
            img: cavity
        },
        {
            _id: 3, 
            name: "Teeth Whitening", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla facilis quaerat",
            img: whitening
        },
    ]
  return (
    <div className="py-10">
      <div className="text-center my-12">
        <h3 className="text-xl uppercase font-bold text-primary">Our Services</h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
              services.map(service => <Service
                key={service._id}
                service={service}
              ></Service>)
          }
      </div>
    </div>
  );
};

export default Services;
