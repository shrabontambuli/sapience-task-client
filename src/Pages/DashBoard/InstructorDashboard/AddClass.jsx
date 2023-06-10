import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";



const AddClass = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="w-full">
            <div className="text-center font-serif font-semibold text-2xl pb-2">
                <h1> Add A Class</h1>
            </div>
            <div className="hero min-h-screen bg-base-200 py-5">


                <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                    <Form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="class name"
                                name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text" placeholder="class image url"
                                name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" placeholder="instructor name"
                                defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="email"
                                defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="number" placeholder="available seats"
                                 className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                                placeholder="price"
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