import { useContext } from "react"
import { ShopContext } from "./Layout";
import { Link } from "react-router-dom";


function Cart() {
    const {myCartItems, removeFromCart} = useContext(ShopContext);
    if (myCartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Nothing to show, Your Bag is Empty</h1>
                <Link to="/" className="text-blue-500 underline mt-4 inline-block">
                    Continue Shopping
                </Link>
            </div>
        );
    }

  return (
    <div className="mt-24 m-10">
        <h3 className="text-center text-2xl font-bold p-5">My Bag</h3>
        <div>
            {
                myCartItems.map((item, index)=>{
                    return(
                        <div key={index} className="flex justify-between shadow rounded-lg m-8 p-3">
                            <div className="flex gap-5">
                                <img src={item.image} alt="Image" className="h-8" />
                                <h4 className="text-left font-semibold">{item.title}</h4>
                            </div>
                            <div className="flex gap-10">
                                <p className="mr-6 ">${item.price}</p>
                                
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className=" m-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                        </svg>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow">
                                        <li>
                                            <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                                        </li>
                                    </ul>
                                </div>
                            
                            </div>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cart