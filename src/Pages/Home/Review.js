import React from "react";

const Review = ({review}) => {
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review.review}</p>
          <div className="flex items-center mt-8">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.img} alt=""/>
              </div>
            </div>
            <div className="ml-5">
                <h3>{review.name}</h3>
                <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
