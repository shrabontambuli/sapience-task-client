import { Link } from "react-router-dom";


const SideBanner = () => {
    return (
        <div className="bg-[#f7f7f7] py-20 mt-5">
            <div className="p-4 py-10 rounded-xl container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-start px-4 gap-5">
                    <div className="p-2">
                        <img className="rounded-xl" src="https://images.unsplash.com/photo-1512053459797-38c3a066cabd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold">Musical Instruments</h1>
                        <p className="mt-10 text-md text-justify">A musical instrument is a device created or adapted to make musical sounds. In principle, any object that produces sound can be considered a musical instrument—it is through purpose that the object becomes a musical instrument. A person who plays a musical instrument is known as an instrumentalist. The history of musical instruments dates to the beginnings of human culture. Early musical instruments may have been used for rituals, such as a horn to signal success on the hunt, or a drum in a religious ceremony. Cultures eventually developed composition and performance of melodies for entertainment. Musical instruments evolved in step with changing applications and technologies.</p>
                        <div className="card-actions mt-10 justify-center md:justify-start">
                            <Link to='/classes'>
                                <button className="btn btn-outline btn-warning">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBanner;