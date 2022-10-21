import "../App.css";

import Gyms from "./Gyms";
import { useContext } from "react";
import Context from "../Store";
import Filter from "./Filter";
import Sibarfilter from "./Sibarfilter";
function Home() {
  const { q, setQ, data, search, fetchData, setFilterParam } =
    useContext(Context);

  // store data in useEffect

  return (
    <div className="App bg-black text-white h-[100vh]">
      <Filter />

      {/* this is main content */}

      <sectiion className="main-content lg:flex-nowrap flex flex-wrap justify-around mx-10">
        <aside className="filter w-[30%] border-2 border-black m-2">
          <Sibarfilter />
        </aside>

        <section className="w-[70%]  border-2 border-black m-2">
          {search(data).map((element) => {
            return (
              <div key={element.user_id} className="flex-col flex w-[100%]">
                <Gyms
                  gym_name={element.gym_name}
                  city={element.city}
                  id={element.user_id}
                  address={`${element.address1}+ ${element.address2}`}
                  pin={element.pin}
                  latitude={element.latitude}
                  longitude={element.longitude}
                  distance={element.distance}
                  distance_text={element.distance_text}
                  duration_text={element.duration_text}
                  rating={element.rating}
                  gallery={element.gallery.images}
                  gym_id={element.gallery.gym_id}
                  category_id={element.gallery.category_id}
                />
              </div>
            );
          })}
        </section>
      </sectiion>
    </div>
  );
}

export default Home;
