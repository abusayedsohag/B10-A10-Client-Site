import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    return (
        <>
            <Navigate to='/login'></Navigate>
        </>
    );
};

export default PrivateRoute;