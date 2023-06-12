import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Classes = () => {
    const [data, setData] = useState([]);
    const url = ('https://music-academy-eta.vercel.app/class')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.slice(0,6)))
    }, [])
    return (
        <div className="bg-[rgba(208,214,214,0.8)] pt-8 pb-24">
            <div className="mt-8 container mx-auto">
                <div>
                    <h1 className="text-3xl font-serif font-semibold text-center">Our Popular Musical Instruments <br /> Class</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-x-4 gap-y-16 mt-14">
                    {
                        data.map(d =>
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} key={d._id}>
                                <div className="card w-72 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={d.picture} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{d.class_name}</h2>
                                        <p>{d.details}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-outline btn-warning">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;