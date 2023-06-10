import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useInstructor from "../../../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();
    console.log(isInstructor);

    if (loading || isInstructorLoading) {
        return <progress className="progress w-full"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;