import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import QuantityComponent from "./QuantityComponent";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce((acc, currentValue) => {
    return acc + (currentValue.price * currentValue.quantity);
  }, 0)

  return (
    <>
      {
        cartItems.length === 0 ?
          <div className='mt-2 flex flex-col  items-center'>
            <div>
              <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-48 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              <div className='text-center'>
                <h1 className='text-4xl font-bold'>Your cart is empty</h1>
                <p className='mt-1 text-gray-500'>Looks like you haven't added any items to your cart yet.</p>
              </div>
              <Link to='/' className='mt-4 btn btn-primary w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div> :
          <div>
            <h1 className='text-4xl font-bold my-4'>Shopping Cart</h1>
            <div className='min-h-screen grid grid-cols-1  lg:grid-cols-2 mt-4 gap-8'>
              <div >
                {cartItems.map(item => (
                  <div key={item.id} className='ring-1 ring-inset ring-gray-600 rounded-lg p-4 mb-4 \'>
                    <div className='flex justify-between  mt-2 w-full'>
                      <div className='flex items-center  gap-6 w-32 object-cover'>
                        <img src={item.image} alt={item.title} className='w-full h-full  rounded-md' />
                        <div>
                          <h3 className='text-3xl font-medium'>{item.title}</h3>
                          <p className='text-xl'>${item.price}</p>
                        </div>
                      </div>

                      <div className='flex flex-col justify-center items-end'>
                        <button onClick={() => removeFromCart(item.id)} className='btn btn-ghost '>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-error">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>

                        <QuantityComponent quantity={item.quantity} onDecrease={() => updateQuantity(item.id, item.quantity - 1)} onIncrease={() => updateQuantity(item.id, item.quantity + 1)} />
                      </div>
                    </div>
                  </div>
                ))}
                <button className='btn btn-outline' onClick={clearCart}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-error">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  Clear Cart
                </button>
              </div>
              <div className='ring-1 ring-inset ring-gray-600 h-60 p-6 rounded-md sticky top-4'>
                <h2 className='font-medium text-2xl'>Order Summary</h2>
                <div>
                  <div className='flex justify-between mt-2 mb-2 text-lg'>
                    <p>Item(s) {cartItems.length}</p>
                    <p>${total}</p>
                  </div>
                  <hr />
                  <div className='pt-2 text-2xl font-bold flex justify-between'>
                    <h2>Total</h2>
                    <h2>${total}</h2>
                  </div>
                  <div className='pt-6'>
                    <button className='btn btn-primary w-full font-bold'>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Cart