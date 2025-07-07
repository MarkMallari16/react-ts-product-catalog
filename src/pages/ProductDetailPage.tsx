
import { Link, useParams } from 'react-router'
import ProductDetail from '../component/ProductDetail';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { showStatus } = useCart();

    if (!id) {
        return <p>ID not found</p>
    }

    return (
        <div className='min-h-screen mx-10'>
            <div role="alert" className={`alert alert-success alert-soft transition-all ease-in-out ${showStatus ? 'opacity-100' : 'opacity-0'}`}>
                <span>Successfully added to cart!</span>
            </div>
            <div className='mt-4'>
                <Link to='/' className='btn btn-ghost'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    Back to main page
                </Link>
            </div>
            <ProductDetail id={id} />
        </div>
    )
}

export default ProductDetailPage