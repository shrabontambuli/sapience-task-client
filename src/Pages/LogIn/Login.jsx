import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from?.pathname || '/';
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user);
            })
            .catch(err => console.log(err))
        console.log(data);
    }
    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            // console.log(loggedInUser);
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('https://sapience-task-server.vercel.app/users', {
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
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-5xl font-bold pb-5">Login now!</h1>
                    <img className="h-full w-full rounded-3xl" src="https://ws.alagappauniversity.ac.in/Purchase/Assets/img/Login.gif" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email"
                                name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                            })} placeholder="password"
                                name="password" className="input input-bordered" />
                            <span
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </span>
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character </p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="mt-4"><Link className="underline" to='/signUp'>SignUp</Link> ! for new account</p>
                        <hr />
                        <button onClick={handleGoogle} className=" mt-2 btn btn-outline btn-primary mx-auto"><p className="text-3xl">G</p> Continue with Google</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;