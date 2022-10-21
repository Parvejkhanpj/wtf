import React, { useContext } from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import Context from "../Store";
const Filter = () => {
  const { q, setQ } = useContext(Context);
  return (
    <div>
      <div className="searchBar flex  ">
        <label className="flex border-2 w-full mx-10 my-10 p-1 rounded-lg  ">
          <AiOutlineSearch className="text-4xl m-2 text-white" />
          <input
            type="text"
            value={q}
            placeholder="Search gym name here...."
            onChange={(e) => setQ(e.target.value)}
            className="  border-none w-full bg-transparent 
             placeholder-slate-400 focus:outline-0 text-xl text-white text-xl"
          />
          <button className="bg-red-600 text-white px-2 m-2 rounded">
            <FiMapPin className="text-2xl m-2" />
          </button>
          <button className="bg-red-600 text-white px-8 text-xl m-2 rounded mr-5">
            Clear
          </button>
        </label>
      </div>
    </div>
  );
};

export default Filter;
