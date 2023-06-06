import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center mt-20">
            <div className="col-span-2">
                <img className="w-full" src="/image/Error.webp" alt="" />
            </div>
            <div>
                <Link to='/'>
                    <button className="btn btn-warning">Go To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;