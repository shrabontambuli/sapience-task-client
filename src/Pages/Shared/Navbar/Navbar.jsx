import { Link } from "react-router-dom";
import Logo from "../../../../public/image/pngwing.com (1).png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(false);

    const handleMood = () => {
        setTheme(!theme)
    }
    useEffect(() => {
        if (theme == true) {
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
        }
    })

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => (error))
    }
    const navOptions =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/classes">Classes</Link></li>

            {user &&
                <li><Link to="/dashboard">Dashboard</Link></li>
            }

            {
                user ? <Link to='/'><li><button onClick={handleLogOut}>LogOut</button></li></Link> :
                    <li><Link to="/login">Login</Link></li>
            }

        </>


    return (
        <>
            <div className="navbar fixed z-50 bg-opacity-10 max-w-screen-4xl bg-white font-semibold text-black pe-3 lg:px-10 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="lg:w-12" src={Logo} alt="" />
                        <p className="ms-2 lg:text-xl text-center font-serif font-semibold">Express Music <br /> Academy</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {user &&
                    <div className="navbar-end">


                        <button onClick={handleMood}>
                            <label className="label justify-end cursor-pointer px-10">
                                {theme ? "Light" : "Dark"}<input type="checkbox" className="toggle toggle-warning ms-2" checked />
                            </label>
                        </button>

                        <img title={user?.displayName} className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                    </div>}
            </div>
        </>
    );
};

export default Navbar;