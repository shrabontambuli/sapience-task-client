import { Link } from "react-router-dom";

const BestClass = () => {
    return (
        <div className="bg-[#ebe9eb]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center items-center px-6 py-20">
                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <div className="bgImg2 bg-fixed text-white">
                            <div className="md:flex justify-center items-center bg-black bg-opacity-40 h-44 px-10 lg:px-36">
                                <div>
                                    <p className="uppercase lg:text-xl pt-2 md:pt-0">You are at the right step now</p>
                                    <p className=' mt-1 text-2xl lg:text-3xl'>Purchase Classes & Creat Beautiful Online Stores</p>
                                    <Link to='/classes'>
                                        <button className="btn btn-outline btn-warning mt-2">View All Classes</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bgImg3 bg-fixed text-white">
                            <div className="md:flex justify-center items-center bg-black bg-opacity-40 h-44 px-10 lg:px-36">
                                <div>
                                    <p className="uppercase lg:text-xl pt-2 md:pt-0">You are at the right step now</p>
                                    <p className=' mt-1 text-2xl lg:text-3xl'>Purchase Classes & Creat Beautiful Online Stores</p>
                                    <Link to='/classes'>
                                        <button className="btn btn-outline btn-warning mt-2">View All Classes</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bgImg4 bg-fixed text-white">
                        <div className="md:flex justify-center items-center bg-black bg-opacity-40 h-96 px-10 lg:px-36">
                            <div className="text-right pt-24 md:pt-0">
                                <p className="uppercase md:text-xl">You are at the right step now</p>
                                <p className='mt-6 text-2xl lg:text-4xl'>Purchase Classes & Create Beautiful Online Stores</p>
                                <Link to='/classes'>
                                    <button className="btn btn-outline btn-warning mt-6">View All Classes</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestClass;