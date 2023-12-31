import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const ClassesPage = () => {
    const classes = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';


    const remaining = classes.filter(ele => ele.status == 'Approve');
   

    const handleSelect = p => {
        const { _id, picture, name, price, available_seats } = p;
        if (user && user.email) {
            const selectedClass = { classesId: _id, name, picture, price, available_seats, email: user.email }
            fetch('https://music-academy-eta.vercel.app/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class added on the Selected Class.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            navigate(from, { replace: true })
        }
    }
    return (
        <div className="mt-24 bg-[#7f8a8ffa] py-14">
            <div className="container mx-auto">
                <h1 className="text-center text-3xl font-serif font-semibold">Our All Class</h1>
                
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 justify-items-center">
                    {
                        remaining.map(p => <div key={p._id} className="card w-80 bg-base-100 shadow-xl image-full">
                            <figure><img src={p.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{p.name}</h2>
                                <p className="card-title">Instructor Name: {p.instructor_name}</p>
                                <div className="flex">
                                    <p className="">Available seats: {p.available_seats}</p>
                                    <p className="">Price: $ {p.price}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => (handleSelect(p))} className="btn btn-outline btn-warning">Select</button>
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