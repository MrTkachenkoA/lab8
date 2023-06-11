import { useState } from "react";

export const TravelList = (props) => {
  const [routes, setRoutes] = useState(props.routes);

  console.log(routes);

  const deleteRoute = (id) => {
    setRoutes((prevRoutes) => prevRoutes.filter((route) => route.id !== id));
  };

  const editRoute = (id) => {
    const newName = prompt("Enter the new name for the route:");
    if (newName) {
      setRoutes((prevRoutes) =>
        prevRoutes.map((route) =>
          route.id === id ? { ...route, name: newName } : route
        )
      );
    }
  };

  const thetravel = (id, name) => (
    <div key={id}>
      <p>{name}</p>
      <button onClick={() => deleteRoute(id)}>Delete</button>
      <button onClick={() => editRoute(id)}>Edit</button>
    </div>
  );

  const renderRoutes = () => {
    return routes.map((route) => {
      return thetravel(route.id, route.name);
    });
  };

  return (
    <div className="tourist-routes_list">
      <h2>Travel List</h2>
      {renderRoutes()}
    </div>
  );
};
