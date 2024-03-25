import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRestros } from "../redux/actions";

const Restros = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/restaurants");
        const data = await response.json();
        dispatch(setRestros(data));
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, [dispatch]);

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restros;
