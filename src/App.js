// import "./App.css";
import { useState, useEffect, useContext } from "react";
import Home from "./Component/Home";
import Context from "./Store";

function App() {
  const [row, setRowdata] = useState([]); // gym data
  const [q, setQ] = useState("");
  const [searchParam] = useState(["gym_name", "city"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  const fetchData = () => {
    try {
      fetch(
        "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
      )
        .then((res) => res.json())
        .then((result) => {
          setRowdata(result.data);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = Object.values(row);

  function search(data) {
    return data.filter((item) => {
      if (row.city == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          );
        });
      }
    });
  }

  return (
    <>
      <Context.Provider
        value={{
          q,
          setQ,
          data,
          search,
          fetchData,
          filterParam,
          setFilterParam,
        }}
      >
        <Home />
      </Context.Provider>
    </>
  );
}

export default App;
