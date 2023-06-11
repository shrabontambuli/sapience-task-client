import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const DashBoardHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="text-center">
            <h1 className="mt-40 text-5xl font-serif font-semibold text-[#727203]">Welcome To Dashboard</h1>
            <h1 className="mt-5 text-5xl font-serif font-semibold text-[#0b7588]">{user?.displayName}</h1>
        </div>
    );
};

export default DashBoardHome;