import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useInstructor from "../../../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        // return <progress className="progress w-full"></progress>
        return <div className="flex justify-center items-center h-screen">
            (<Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />)
        </div>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;
