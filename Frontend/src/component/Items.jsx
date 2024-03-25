import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

const Items = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`/menu/${restaurantId}`);
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
