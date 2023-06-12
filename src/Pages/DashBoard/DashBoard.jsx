import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import './DashBoard.css'
import { FaHome } from 'react-icons/fa';
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
// import useInstructor from "../../hooks/useInstructor";

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // const isInstructor = true;
    return (
        <div>
            <div className="text-center bg-[#556777bd] py-3">
                <h1 className="text-3xl font-serif font-semibold">Dashboard</h1>
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center bg-[#3e404196]">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu pt-12 w-64 h-full bg-[#747c7a] text-base-content items-center">
                        {user && <div className="avatar">
                            <div className="w-16 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-4 mb-4">
                                <img src={user?.photoURL} />
                            </div>
                        </div>}

                        {
                            isAdmin ?
                                <>
                                    <li><Link to="/"><FaHome /> Admin Home</Link></li>
                                    <li><Link to="manageClasses">Manage Classes</Link></li>
                                    <li><Link to="manageUsers">Manage Users</Link></li>
                                </> :
                                isInstructor ?
                                    <>
                                        <li><Link to="/"><FaHome /> Instructor Home</Link></li>
                                        <li><Link to="addClass">Add A Class</Link></li>
                                        <li><Link to="myClasses">My Classes</Link></li>
                                    </> :

                                    <>
                                        <li><Link to="/"><FaHome /> User Home</Link></li>
                                        <li><Link to="mySelected">My Selected Classes</Link></li>
                                        <li><Link to="enrolledClasses">My Enrolled Classes</Link></li>
                                        <li><Link to="paymentHistory">My Payment History</Link></li>
                                    </>
                        }
                        

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;