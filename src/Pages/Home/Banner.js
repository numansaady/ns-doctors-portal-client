import React from "react";
import chair from '../../assets/images/chair.png';
import PrimaryBtn from "../Shared/PrimaryBtn";

const Banner = () => {
  return ( 
    <div class="hero min-h-screen" style={{backgroundImage: `url(${chair})`}}>
      <div class="hero-overlay bg-opacity-90"></div>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt=""/>
        <div className="text-neutral-content">
          <h1 class="text-5xl font-bold ">Your New Smile Starts Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
