import { useState, useEffect } from "react";
import * as itemsAPI from '../../utilities/items-api'

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  
  //fetch the menuItems from the server via AJAK
  //when the data returns, call setMenuItems to update state

  //all hooks are functions
useEffect(function() {
  async function getItems() {
    const items = await itemsAPI.getAll();
    setMenuItems(items);
  }
  getItems();
}, []);

  return (
    <h1>NewOrderPage</h1>
  );
}

