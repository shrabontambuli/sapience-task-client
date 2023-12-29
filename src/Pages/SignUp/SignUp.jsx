import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then((result) => {


                const loggedUser = result.user;
                navigate(from, { replace: true })
                console.log(loggedUser);
                updateProfile(result.user, {
                    displayName: data.name, photoURL: data.photo
                })
                const saveUser = { name: data.name, email: data.email }
                fetch('https://music-academy-eta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Class added on the Selected Class.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

            })
            .catch((error) => {
                return (error);

            })
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email}
                fetch('https://music-academy-eta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                           navigate(from);
                    })
            })

    }
    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <img className="h-full w-full rounded-3xl mt-10" src="https://i.pinimg.com/originals/68/36/db/6836dbe3b0f86daa293c22758497c18f.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name"
                                    name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email"
                                    name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                })}
                                    placeholder="password"
                                    name="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                })}
                                    placeholder="confirm password"
                                    name="confirmPassword" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="photo"
                                    name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Register</button>
                            </div>
                            <p className="mt-4">Already have an account! <Link className="underline" to='/login'>Please Login</Link></p>
                            <button onClick={handleGoogle} className=" mt-2 btn btn-outline btn-warning mx-auto"><p className="text-3xl">G</p> Continue with Google</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;