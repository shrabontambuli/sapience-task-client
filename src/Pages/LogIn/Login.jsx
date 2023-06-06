import { Form, Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <img className="h-96 w-full rounded-3xl mt-3" src="/image/login.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                    name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <p className="mt-4"><Link className="underline" to='/signUp'>SignUp</Link> ! for new account</p>
                            <hr />
                            <button className=" mt-2 btn btn-outline btn-warning mx-auto"><img className="w-8 rounded-full" src="/images/google.png" alt="" /> Continue with Google</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;