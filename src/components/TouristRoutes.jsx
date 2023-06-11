import { useState } from "react";
import "../index.css";

export const TouristRoutes = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
  };

  const handleDeleteButtonClick = () => {
    props.onDeleteRoute();
  };

  return (
    <div className={`tourist-routes ${isSelected ? "selected" : ""}`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
      <h2>{props.name}</h2>
      <p>Length of the route: {props.length}</p>
      <p>Difficulty of the route: {props.difficulty}</p>
      <p>time of the route: {props.time}</p>
      <input type="checkbox" onChange={handleDeleteButtonClick} />
    </div>
  );
};
