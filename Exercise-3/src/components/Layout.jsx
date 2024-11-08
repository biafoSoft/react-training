import { createContext, useEffect, useState } from "react";
import Header from "./Header";

const ShopContext = createContext({
  itemCount: 0,
  totalPrice: 0,
  myCartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  
});

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const [itemCount, setItemCount] = useState(
    () => Number(localStorage.getItem("itemCount")) || 0
  );
  const [totalPrice, setTotalPrice] = useState(
    () => Number(localStorage.getItem("totalPrice")) || 0
  );
  const [myCartItems, setMyCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("myCartItems")) || [];
    } catch (error) {
      console.error("Error parsing myCartItems from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("myCartItems", JSON.stringify(myCartItems));
    localStorage.setItem("itemCount", itemCount);
    localStorage.setItem("totalPrice", totalPrice);
  }, [itemCount, totalPrice, myCartItems]);

  const addToCart = (cartItem) => {
    const newCount = 1;
    const newItemPrice=cartItem.price; // assuming each item has a fixed price of 10 for now

    setMyCartItems((prevItems) => [...prevItems, cartItem]);
    setItemCount((prevCount) => prevCount + newCount);
    setTotalPrice((prevTotal) => prevTotal + newItemPrice);
  };
  
  const removeFromCart = (itemId) => {
    setMyCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === itemId);
      if (!itemToRemove) return prevItems;

      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      const itemPrice = itemToRemove.price;
      
      // Update itemCount and totalPrice
      setItemCount((prevCount) => prevCount - 1);
      setTotalPrice((prevTotal) => prevTotal - itemPrice);

      // Save updated cart to localStorage
      localStorage.setItem("myCartItems", JSON.stringify(updatedItems));
      localStorage.setItem("itemCount", itemCount - 1);
      localStorage.setItem("totalPrice", totalPrice - itemPrice);

      return updatedItems;
    });
  };
  // To clear the local storage
  // localStorage.clear();

  console.log("Item Count:", itemCount);
  console.log("Total Price:", totalPrice);
  console.log("My Cart Items:", myCartItems);

  return (
    <ShopContext.Provider value={{ itemCount, totalPrice, addToCart, myCartItems, removeFromCart }}>
      <Header />
      <main>{children}</main>
    </ShopContext.Provider>
  );
}

export default Layout;
export { ShopContext };
