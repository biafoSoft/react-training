import { useEffect, useState } from "react"

function Home() {
  const [carts, setCarts] = useState([]);
  useEffect(()=>{
     fetch('https://fakestoreapi.com/products', { mode: "cors" })
     .then((response)=>{
      if (!response.ok) { 
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json()})
     .then((data)=>{
      console.log(data);
      setCarts(data);
     })
     .catch((error)=>console.log(error))
     .finally(()=>console.log('fetching data completed'))
      
  },[]);
  return (
      <div className="flex flex-wrap  gap-4 m-8">
          {
            carts.map((cart, index)=>{
              const shortDescription = cart.description.split(" ").slice(0, 10).join(" ") + "...";
              return(
                <div className="card bg-base-100 w-96 shadow-xl" key={index}>
                    <figure className="px-10 pt-10 h-40">
                      <img
                        src={cart.image}
                        
                        alt={cart.category}
                        className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between">
                          <h2 className="card-title">{cart.category}</h2>
                          <p>{cart.price}$</p>
                      </div>
                      <p>{shortDescription}</p>
                      <div className="card-actions text-end items-end">
                        <button className="btn btn-primary">Buy Now</button>
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