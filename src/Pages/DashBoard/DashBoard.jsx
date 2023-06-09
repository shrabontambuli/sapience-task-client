import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import './DashBoard.css'

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="text-center bg-[#556777bd] py-3">
                <h1 className="text-3xl font-serif font-semibold">Dashboard</h1>
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center pt-6 bg-[#3e404196]">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-5 w-64 h-full bg-[#747c7a] text-base-content items-center">
                        {user && <div className="avatar">
                            <div className="w-16 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-4 mb-4">
                                <img src={user?.photoURL} />
                            </div>
                        </div>}
                        <li><Link to="mySelected">My Selected Classes</Link></li>
                        <li><Link to="/">My Enrolled Classes</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;