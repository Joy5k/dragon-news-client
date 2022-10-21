import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../src/context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div><Spinner className='text-align-center ms-50' animation="border" variant="primary" /></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
     }
    return children;
};

export default PrivateRoute;