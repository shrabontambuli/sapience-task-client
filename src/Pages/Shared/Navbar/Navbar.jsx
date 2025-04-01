import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => error);
  };

  return (
    <>
      <div className="navbar w-full bg-slate-300 font-semibold text-black py-4 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
          <div className="flex items-center">
            <p className="ms-2 lg:text-xl text-center font-serif font-semibold">
              Blog Post
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <button onClick={handleLogOut} className="btn btn-primary me-4">
              LogOut
            <FiLogOut size={20} />
            </button>
            <img
              title={user?.displayName}
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <button className="btn btn-primary btn-outline me-4">
                LogIn
              </button>
            </Link>
            <Link to="/signUp">
              <button className="btn btn-primary">
                SignUp
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
