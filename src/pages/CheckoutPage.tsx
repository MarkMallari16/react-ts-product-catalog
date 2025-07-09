import { Link } from "react-router"
import { useCart } from "../context/CartContext"

const CheckoutPage = () => {
    const { cartItems, total } = useCart();
    return (
        <div className="min-h-screen grid  mt-10 mx-6 lg:mx-20">
            <div>
                <Link to="/cart" className="btn btn-ghost mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    Back to cart
                </Link>

                <div className="mb-6">
                    <h1 className="font-bold text-3xl">Checkout</h1>
                </div>
                <div className="ring-1 ring-inset text-gray-300 py-6 px-8 rounded-md">
                    <h3 className="text-2xl font-medium mb-2">Your order</h3>
                    <ul className="mb-4">
                        {cartItems.map((item) => (
                            <li className="flex justify-between mb-1">
                                <p >{item.title}</p>
                                <p>
                                    ${item.price}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="mt-2 flex justify-between font-bold text-2xl">
                        <h4 className="">Total</h4>
                        <h4>${total}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage