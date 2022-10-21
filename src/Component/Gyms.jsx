import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiNavigation } from "react-icons/fi";
const Gyms = ({
  gym_name,
  city,
  address,
  distance_text,
  duration_text,
  rating,
  gallery,
}) => {
  return (
    <div className="w-[100%] bg-gradient-to-r mb-10 relative from-neutral-700 flex shadow-2xl shadow-neutral-700/40  rounded-lg lg:h-[80%] lg:w-[100%] ">
      <div className="image-element w-[50%] h-[100%]">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          className="h-[100%]"
        />
      </div>
      <div className="content ml-10">
        <h2 className="text-xl font-[Helvetica] text-left p-3 pl-0 mt-4 text-[22px] font-bold">
          {gym_name}
        </h2>

        <p className="text-left font-bold  text-red-600 mb-2">{city}</p>
        <div className="rating flex text-2xl ">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
        <p className="text-left">{address}</p>
        <div className="py-2 flex justify-around items-center pl-0">
          <FiNavigation className="text-green-400 mx-2" />
          <span>
            {distance_text} | {duration_text}
          </span>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 m-2 rounded text-xl  absolute bottom-5 right-5">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Gyms;
