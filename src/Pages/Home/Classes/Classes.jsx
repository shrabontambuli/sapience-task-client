import { useEffect, useState } from "react";


const Classes = () => {
    const [data, setData] = useState([]);
    console.log(data);
    const url = ('http://localhost:5000/class')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="mt-20 container mx-auto">
            <div>
                <h1 className="text-4xl font-serif font-semibold text-center">Our Musical Instruments <br /> Class</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
                {
                    data.map(d =>
                     <div key={d._id} className="card w-80 bg-base-100 shadow-xl">
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
                    )
                }
            </div>
        </div>
    );
};

export default Classes;