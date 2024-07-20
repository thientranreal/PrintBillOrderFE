// auth.js
const isLoggedIn = () => {
    const token = localStorage.getItem('token'); // or sessionStorage
    return !!token; // returns true if token exists, false otherwise
};
export default isLoggedIn;
