import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const url = ('https://express-music-academy-server.vercel.app/instructors')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setInstructors(data.slice(0,6)))
    }, [])
    return (
        <div className="bg-[#383b3b55] py-16">
            <div className="container mx-auto text-center">
                <div className="mt-5">
                    <h1 className="text-3xl font-serif font-semibold text-center">Our Best Popular Instructors</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-10 mt-16">
                    {
                        instructors.map(instructor => <div key={instructor._id} className="card w-72 glass p-5 rounded-full">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                <figure><img className="rounded-full w-60 h-72" src={instructor.picture} alt="car!" /></figure>
                            </motion.div>
                            <div className="card-body">
                                <h2 className="card-title justify-center">{instructor.name}</h2>
                                <p className="card-title justify-center">Students: {instructor.students}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;