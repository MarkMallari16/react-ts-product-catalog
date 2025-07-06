import { useState } from 'react'
import { useCart } from '../context/CartContext';
import { mockProducts } from '../types/mockProducts';

const ProductDetail = ({ id }: { id: string }) => {
    const product = mockProducts.find(item => item.id === id);
    //quantity state
    const [quantity, setQuantity] = useState<number>(1);

    const { addToCart } = useCart();

    const increasedQuantity = () => {
        setQuantity((prev) => prev + 1);
    }
    const decreasedQuantity = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (!product) return <p className='text-9xl font-black text-center'>Product not found</p>

    return (
        <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <img src={product.image} alt={product.title} className='lg:h-[40rem] w-full object-cover rounded-md' />
            </div>
            <div>
                <div>
                    <h1 className='text-5xl font-bold'>{product.title}</h1>
                    <h2 className='text-3xl pt-4'>${product.price}</h2>
                    <p className='pt-2'>{product.description}</p>
                </div>
                <div className='mt-4'>
                    <p>Quantity:</p>
                    <div className='flex items-center gap-2'>
                        <button className='btn btn-ghost' onClick={decreasedQuantity} disabled={quantity === 0}>-</button>
                        <p>{quantity}</p>
                        <button className='btn btn-ghost' onClick={increasedQuantity}>+</button>
                    </div>
                </div>
                <div className='mt-4 flex gap-4'>
                    <button className='btn btn-primary flex items-center py-6  grow' onClick={() => addToCart(product, quantity)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>

                    <button className='btn btn-ghost py-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail