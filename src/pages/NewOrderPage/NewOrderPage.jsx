import { useState, useEffect } from "react";

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  
  //fetch the menuItems from the server via AJAK
  //when the data returns, call setMenuItems to update state

  //all hooks are functions
  useEffect(function() {
   
  }, []);

  return (
    <h1>NewOrderPage</h1>
  );
}

