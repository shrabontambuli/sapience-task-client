import { Link } from 'react-router-dom';
import './Parallax.css';

const Parallax = () => {
    return (
        <div className="bgImg bg-fixed text-white">
            <div className="md:flex justify-center items-center bg-black bg-opacity-40 py-52 px-10 lg:px-36">
                <div className="md:ml-10">
                    <p className="uppercase text-xl">You are at the right step now</p>
                    <p className='mt-8 text-3xl lg:text-8xl'>Purchase Classes & Create Beautiful Online Stores</p>
                    <Link to='/classes'>
                        <button className="btn btn-outline btn-warning mt-10">View All Classes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Parallax;