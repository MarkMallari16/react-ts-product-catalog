import { useState } from 'react';
import { useCart } from '../context/CartContext'
import type { Product } from '../types/product'
import { Link } from 'react-router'

const ProductCard = ({ product }: { product: Product }) => {

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = (product: Product) => {
    addToCart(product, quantity);
  }

  return (
    <div className="ring-1 ring-inset ring-gray-600 rounded-lg w-full">
      <img src={product.image} alt={product.title} loading='lazy' className="w-full h-64 object-cover rounded-t-md" />

      <div className='p-4'>
        <h2 className='pt-2 font-medium text-lg'>{product.title}</h2>
        <p className='pt-1'>${product.price}</p>

        <div className='flex gap-2 justify-end pt-2'>
          <Link to={`/products/${product.id}`} className="btn btn-outline">
            View Details
          </Link>
          <button className='btn btn-primary' onClick={() => handleAddToCart(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

            Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard