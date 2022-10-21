import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Context from "../Store";

const Sibarfilter = () => {
  const { q, setQ, setFilterParam } = useContext(Context);
  return (
    <div>
      <h1 className="text-3xl text-left">Fliters</h1>
      <div className="Location my-4">
        <h2 className="text-xl text-left p-3 pl-0">Location</h2>
        <label className="border-2 border-slate-600 flex justify-start items-center w-[85%] rounded">
          <AiOutlineSearch className="text-md m-2 text-white" />
          <input
            type="text"
            placeholder="location"
            onChange={(e) => setQ(e.target.value)}
            className="bg-transparent focus:outline-0 bg-transprant p-2 pl-0 text-white "
          />
        </label>
      </div>
      {/* min & max range */}
      <div className="max_min my-4">
        <h2 className="text-xl text-left p-3 pl-0">Price</h2>
        <label className=" flex   rounded">
          <input
            type="number"
            placeholder="min"
            className="bg-transparent text-md focus:outline-0 border-2 border-slate-600 w-[42.5%] rounded  bg-transprant b p-2 text-white text-md"
          />
          <input
            type="number"
            placeholder="max"
            className="bg-transparent focus:outline-0 border-2 border-slate-600 w-[42.5%] mx-2 rounded bg-transprant p-2 text-white text-md "
          />
        </label>
        {q}
        {/* citis dropdown */}
        <h2 className="text-xl text-left p-3 pl-0 mt-4">Cities</h2>

        <select
          id="Cities"
          onChange={(e) => setFilterParam(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900
               text-md rounded-lg focus:ring-blue-500 focus:border-blue-500
                block w-[85%] p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500"
        >
          <option defaultValue value="All">
            Choose a Cities
          </option>
          <option value="New Delhi">New Delhi</option>
          <option value="Gaziabad">Gaziabad</option>
          <option value="Greter Noida">Greter Noida</option>
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>
    </div>
  );
};

export default Sibarfilter;
