import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const saveClasses = {available_seats: data.availableSeats,instructor_name: data.instructorName, name: data.name, email: data.email, picture: data.picture, price: data.price, status: data.status }
        fetch('https://express-music-academy-server.vercel.app/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveClasses)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'New Class added and pending for admin approval ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full">

            <div className="hero min-h-screen bg-base-200 py-5">


                <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                    <div className="text-center font-serif font-semibold text-2xl mt-5">
                        <h1> Add A Class</h1>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="class name"
                                name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text" {...register("picture", { required: true })} placeholder="class image url"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" {...register("instructorName", { required: true })} placeholder="instructor name"
                                defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email"
                                defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="number" {...register("availableSeats", { required: true })} placeholder="available seats"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })}
                                placeholder="price"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input type="text" {...register("status", { required: true })}
                                placeholder="status" defaultValue='pending'
                                className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-warning w-full">Add A Class</button>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default AddClass;