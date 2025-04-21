import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthContext';
import { Navigate } from 'react-router-dom';
import Spinner from './Component/Spinner/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);

    // if (loader) {
    //     return (
    //         <Spinner></Spinner>
    //     )
    // }

    return user ? children : <Navigate to="/login" />;

};

export default PrivateRoute;