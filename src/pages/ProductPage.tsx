
import type { Product } from '../types/product'
import ProductCard from '../component/ProductCard'
import Laptop from '../assets/images/laptop.jpg';
import HeadPhone from '../assets/images/headphone.jpg';
import SmartPhone from '../assets/images/smartphone.jpg';
import Keyboard from '../assets/images/keyboard.jpg';
import Monitor from '../assets/images/monitor.jpg';
import Mouse from '../assets/images/mouse.jpg';
import Tablet from '../assets/images/tablet.jpg';
import Smartwatch from '../assets/images/smartwatch.jpg';
import Camera from '../assets/images/camera.jpg';
import Speaker from '../assets/images/speaker.jpg';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import ProductCardSkeleton from '../component/ProductCardSkeleton';

const mockProducts: Product[] = [
    { id: "1", title: "Laptop", description: "Powerful laptop with high performance.", price: 1200, image: Laptop },
    { id: "2", title: "Headphones", description: "Noise-canceling over-ear headphones.", price: 200, image: HeadPhone },
    { id: "3", title: "Smartphone", description: "Latest model smartphone with OLED display.", price: 999, image: SmartPhone },
    { id: "4", title: "Keyboard", description: "Mechanical keyboard with RGB lighting.", price: 150, image: Keyboard },
    { id: "5", title: "Monitor", description: "27-inch 4K UHD monitor.", price: 350, image: Monitor },
    { id: "6", title: "Mouse", description: "Wireless ergonomic mouse.", price: 80, image: Mouse },
    { id: "7", title: "Tablet", description: "Lightweight tablet for work and play.", price: 600, image: Tablet },
    { id: "8", title: "Smartwatch", description: "Fitness tracking smartwatch.", price: 250, image: Smartwatch },
    { id: "9", title: "Camera", description: "Mirrorless camera with 24MP sensor.", price: 1200, image: Camera },
    { id: "10", title: "Speaker", description: "Portable Bluetooth speaker.", price: 120, image: Speaker },
]

const ProductPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { showStatus } = useCart();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    })
    return (
        <div className='mx-4 lg:mx-20'>
            <div role="alert" className={`mt-10 alert alert-success alert-soft transition-all ease-in-out ${showStatus ? 'opacity-100' : 'opacity-0'}`}>
                <span>Successfully added to cart!</span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-8'>
                {
                    isLoading ? Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    )) :
                        mockProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                }
            </div>
        </div>
    )
}

export default ProductPage