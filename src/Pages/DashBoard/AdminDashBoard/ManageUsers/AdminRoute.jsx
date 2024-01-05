import { Navigate, useLocation } from "react-router";
import useAdmin from "../../../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Hourglass } from "react-loader-spinner";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        // return <progress className="progress w-full"></progress>
        return (<Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
            />)
    }

    if (user || isAdmin) {
        console.log(user, isAdmin);
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;