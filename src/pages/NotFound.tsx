import { Link } from "react-router"

const NotFound = () => {

    return (
        <div className="min-h-screen grid place-items-center text-center">
            <div>
                <h1 className="text-8xl font-black">
                    404 not found
                </h1>
                <Link to='/products' className="btn btn-primary mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Go to back to main page
                </Link>
            </div>
        </div>
    )
}

export default NotFound