import { useLoaderData } from "react-router-dom";


const ClassesPage = () => {
    const classes = useLoaderData();
    return (
        <div className="mt-20 bg-[#7f8a8ffa] py-10">
            <div className="container mx-auto">
                <h1 className="text-center text-3xl font-serif font-semibold">Our All Class</h1>
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-y-5">
                    {
                        classes.map(p => <div key={p._id} className="card w-80 bg-base-100 shadow-xl image-full">
                            <figure><img src={p.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{p.name}</h2>
                                <p className="card-title">Instructor Name: {p.instructor_name}</p>
                                <div className="flex">
                                    <p className="">Available seats: {p.available_seats}</p>
                                    <p className="">Price: $ {p.price}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning">Selecting</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassesPage;