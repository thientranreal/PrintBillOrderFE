// auth.js
export const isLoggedIn = () => {
    const token = localStorage.getItem('token'); // or sessionStorage
    return !!token; // returns true if token exists, false otherwise
};
