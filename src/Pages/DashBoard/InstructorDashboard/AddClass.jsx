import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";



const AddClass = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
        console.log(data);
    }

    return (
        <div className="w-full">
            <div className="text-center font-serif font-semibold text-2xl pb-2">
                <h1> Add A Class</h1>
            </div>
            <div className="hero min-h-screen bg-base-200 py-5">


                <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
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
                       
                        <div className="form-control mt-6">
                            <button  className="btn btn-warning w-full">Add A Class</button>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default AddClass;