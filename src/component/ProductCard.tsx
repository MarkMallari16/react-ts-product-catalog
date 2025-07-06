import React from 'react'
import type { Product } from '../types/product'
import { Link } from 'react-router'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="ring-1 ring-inset ring-gray-600 rounded-lg w-full">
      <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-t-md" />
      <div className='p-4'>
        <h2 className='pt-2 font-medium text-lg'>{product.title}</h2>
        <p className='pt-1'>${product.price}</p>

        <div className='flex justify-end pt-2'>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard