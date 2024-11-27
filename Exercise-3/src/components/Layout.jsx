 
import { createContext, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ShopContext = createContext({
  products:[],
  itemCount: 0,
  totalPrice: 0,
  myCartItems: [],
  handleAddProduct: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const [products, setProducts] = useState([]);
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

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("myCartItems", JSON.stringify(myCartItems));
    localStorage.setItem("itemCount", itemCount);
    localStorage.setItem("totalPrice", totalPrice);
  }, [itemCount, totalPrice, myCartItems]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
        console.log(res.data);
        setProducts(res.data);
    })
    .catch(err=>console.log(err));
  },[]);

  const handleAddProduct = async (newProduct) => {
    try {
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      const createdProduct = response.data;
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
      console.log(`Product added successfully:`, createdProduct);
    } catch (err) {
      console.log(`Error Adding Product: ${err}`);
    }
  };

  const addToCart = (cartItem) => {
    setMyCartItems((prevItems) => [...prevItems, cartItem]);
    setItemCount((prevCount) => prevCount + 1);
    setTotalPrice((prevTotal) => prevTotal + cartItem.price);
  };

  const removeFromCart = (itemId) => {
    setMyCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === itemId);
      if (!itemToRemove) return prevItems;

      const updatedItems = prevItems.filter((item) => item.id !== itemId);

      // Update itemCount and totalPrice with the actual new values
      setItemCount((prevCount) => prevCount - 1);
      setTotalPrice((prevTotal) => prevTotal - itemToRemove.price);
      
      return updatedItems;
    });
  };

  console.log("Item Count:", itemCount);
  console.log("Total Price:", totalPrice);
  console.log("My Cart Items:", myCartItems);

  return (
    <ShopContext.Provider
      value={{ products, itemCount, totalPrice,handleAddProduct, addToCart, myCartItems, removeFromCart }}
    >
      <Header />
      
      <main>{children}</main>
    </ShopContext.Provider>
  );
}

export default Layout;
export { ShopContext };
