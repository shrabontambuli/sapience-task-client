import { motion } from "framer-motion";


const NewSection = () => {
    return (
        <div>
            <div className="hero" style={{
                backgroundImage: `url("https://melody.ancorathemes.com/wp-content/uploads/2016/05/bg2-Parallax.jpg")`
            }}>
                <div className="hero-overlay bg-white bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content py-40">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Express Music Academy</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20">
                            <div>
                                <div className="border-4 border-warning rounded-full p-2">
                                    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className="radial-progress text-xl font-serif font-semibold bg-black bg-opacity-25" style={{ "--value": "80", "--size": "9rem", "--thickness": "2px" }}>234</motion.div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Students</h1>
                            </div>
                            <div>
                                <div className="border-4 border-warning rounded-full p-2">
                                    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className="radial-progress text-xl font-serif font-semibold bg-black bg-opacity-25" style={{ "--value": "90", "--size": "9rem", "--thickness": "2px" }}>25</motion.div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Teachers</h1>
                            </div>
                            <div>
                                <div className="border-4 border-warning rounded-full p-2">
                                    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className="radial-progress text-xl font-serif font-semibold bg-black bg-opacity-25" style={{ "--value": "70", "--size": "9rem", "--thickness": "2px" }}>360</motion.div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Programmes</h1>
                            </div>
                            <div>
                                <div className="border-4 border-warning rounded-full p-2">
                                    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className="radial-progress text-xl font-serif font-semibold bg-black bg-opacity-25" style={{ "--value": "60", "--size": "9rem", "--thickness": "2px" }}>280</motion.div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Awards</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewSection;