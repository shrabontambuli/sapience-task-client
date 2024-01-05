import { Link, Outlet } from "react-router-dom";
import './DashBoard.css'
import { FaHome } from 'react-icons/fa';
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const DashBoard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // const isInstructor = true;
    return (
        <div className="box">
            {/* <div className="text-center bg-[#556777bd] py-3">
                <h1 className="text-3xl font-serif font-semibold">Dashboard</h1>
            </div> */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu pt-20 w-64 h-full box2 text-base-content items-center">
                        <div>
                            <Link to='/dashboard'>
                                <h1 className="flex items-center text-xl font-bold"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 37 37" fill="none">
                                    <path d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876ZM18.5003 4.42428C17.8528 4.42428 17.2207 4.54762 16.7736 4.8097L8.29451 9.7122C5.78159 11.408 5.78159 11.408 5.78159 14.0443V22.9397C5.78159 25.5759 5.78159 25.5759 8.35617 27.318L16.7736 32.1743C17.6832 32.6984 19.3328 32.6984 20.2424 32.1743L28.7215 27.2718C31.219 25.5759 31.219 25.5759 31.219 22.9397V14.0443C31.219 11.408 31.219 11.408 28.6445 9.66595L20.227 4.8097C19.7799 4.54762 19.1478 4.42428 18.5003 4.42428Z" fill="black" />
                                    <path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black" />
                                </svg> Dashboard</h1>
                            </Link>
                        </div>
                        <div className="mt-20">
                            {
                                isAdmin ?
                                    <>
                                        <li><Link to="/"><FaHome />Home</Link></li>
                                        <li><Link to="manageClasses">Manage Classes</Link></li>
                                        <li><Link to="manageUsers">Manage Users</Link></li>
                                    </> :
                                    isInstructor ?
                                        <>
                                            <li><Link to="/"><FaHome />Home</Link></li>
                                            <li><Link to="addClass">Add A Class</Link></li>
                                            <li><Link to="myClasses">My Classes</Link></li>
                                        </> :

                                        <>
                                            <li><Link to="/"><FaHome />Home</Link></li>
                                            <li><Link to="mySelected">My Selected Classes</Link></li>
                                            <li><Link to="enrolledClasses">My Enrolled Classes</Link></li>
                                            <li><Link to="paymentHistory">My Payment History</Link></li>
                                        </>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;