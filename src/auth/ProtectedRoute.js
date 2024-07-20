import React from 'react';
import isLoggedIn from './auth';
import { history } from "../history";

const ProtectedRoute = ({ children }) => {
    return isLoggedIn() ? children : window.parent.location.href = '/login';
};

export default ProtectedRoute;
