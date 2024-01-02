import { Link } from "react-router-dom";


const SideSection = () => {
    return (
        <div className="bg-[#f7f7f7] py-20 mt-5">
            <div className="p-4 py-10 rounded-xl container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-4 gap-5">
                    <div>
                        <h1 className="text-4xl font-semibold">Musical Instruments Learning</h1>
                        <p className="mt-10 text-md font-medium text-black">1. Start with Music Theory Basics.....</p>
                        <p className="mt-4 text-md font-medium text-black">2. Conduct Thorough Online Research.....</p>
                        <p className="mt-4 text-md font-medium text-black">3. Choose Your Type of Music.....</p>
                        <p className="mt-4 text-md font-medium text-black">4. Pick Up A Music Instrument.....</p>
                        <p className="mt-4 text-md font-medium text-black">5. Select Beginner Music Pieces.....</p>
                        <p className="mt-4 text-md font-medium text-black">6. Practice Regularly.....</p>
                        <p className="mt-4 text-md font-medium text-black">6. Score Your Performance.....</p>
                        <p className="mt-4 text-md font-medium text-black">6. Set Realistic Goals.....</p>
                        <div className="card-actions mt-10 justify-center md:justify-start">
                            <Link to='/classes'>
                                <button className="btn btn-outline btn-warning">Learn More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="p-2">
                        <img className="rounded-xl" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideSection;