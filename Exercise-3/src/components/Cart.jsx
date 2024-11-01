
import bag1 from '../assets/images/bag1.png'
function Cart() {
    return (
        <div className='flex p-9'>
            <div>
                <img src={bag1} alt="" />
            </div>
            <div className='flex flex-col justify-between p-4'>
                <h1 className='text-2xl font-bold'>Product Name</h1>
                <p>Product Description</p>
                <p className='text-l font-bold'>56$</p>
                <p>Quantity</p>
                <button className="btn bg-gray-700 text-white hover:bg-gray-600">Add to Cart</button>
            </div>
        </div>
    )
}

export default Cart