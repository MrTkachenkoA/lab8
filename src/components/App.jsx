import { useState } from "react";
import "../index.css";
import { TouristRoutes } from "./TouristRoutes";
import { TravelList } from "./TravelList";

export const App = () => {
  const [routes, setRoutes] = useState([
    {
      id: 0,
      name: "Вишенське озеро",
      length: "12km",
      difficulty: "6/10",
      time: "4h",
    },
    {
      id: 1,
      name: "Черепашинецький кар'єр",
      length: "21km",
      difficulty: "9/10",
      time: "8h",
    },
    {
      id: 2,
      name: "Садиба Пирогова",
      length: "6km",
      difficulty: "4/10",
      time: "2h",
    },
  ]);

  const handleDeleteRoute = (id) => {
    setRoutes(routes.filter((route) => route.id !== id));
  };

  return (
    <>
      <TravelList routes={routes} />
      <div className="tourist-routes_wrapper">
        {routes.map(({ id, name, length, difficulty, time }) => (
          <TouristRoutes
            key={id}
            name={name}
            length={length}
            difficulty={difficulty}
            time={time}
            onDeleteRoute={() => handleDeleteRoute(id)}
          />
        ))}
      </div>
    </>
  );
};
