import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum soluta aspernatur exercitationem, officia cum ad provident facilis quisquam ipsam?",
      img: people1,
      location: "California"
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum soluta aspernatur exercitationem, officia cum ad provident facilis quisquam ipsam?",
      img: people2,
      location: "California"
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum soluta aspernatur exercitationem, officia cum ad provident facilis quisquam ipsam?",
      img: people3,
      location: "California"
    },
  ]
  return (
    <section className="py-12">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-primary">Testimonial</h3>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48 hidden lg:block" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            reviews.map(review => <Review
              key={review._id}
              review={review}
            ></Review>)
          }
      </div>
    </section>
  );
};

export default Testimonials;
