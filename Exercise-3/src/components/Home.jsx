import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ShopContext } from "./Layout";

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const {addToCart} = useContext(ShopContext);
  useEffect(()=>{
     fetch('https://fakestoreapi.com/products', { mode: "cors" })
     .then((response)=>{
      if (!response.ok) { 
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json()})
     .then((data)=>{
      console.log(data);
      setCartItems(data);
     })
     .catch((error)=>console.log(error))
     .finally(()=>console.log('fetching data completed'))

  },[]);
  
 

  return (
      <div className="flex flex-wrap  gap-4 m-8 mt-20">
          {
            cartItems.map((cart, index)=>{
              const shortDescription = cart.description.split(" ").slice(0, 6).join(" ") + "...";
              return(
                <div className="card bg-base-100 w-96 shadow-xl" key={index}>
                    <figure className="px-10 pt-10 h-40">
                    {/* to={`/carts/${cart.id}`} */}
                      <Link to={"/carts"} >
                        <img
                        src={cart.image}
                        
                        alt={cart.category}
                        className="rounded-xl h-40" />
                      </Link>
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between">
                          <h2 className="card-title">{cart.title}</h2>
                          <p>{cart.price}$</p>
                      </div>
                      <p>{shortDescription}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-neutral" onClick={()=>addToCart(cart)}>
                          Add to Cart
                          </button>
                      </div>
                    </div>
                </div>
              )
            })
          }
      </div>
  )
}

export default Home