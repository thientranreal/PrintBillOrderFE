// NotFound.js
import React from 'react';
import NotFoundImage from '../asset/images/6325254.jpg'; // Adjust the path if necessary.

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <a href="/login" className="back-to-home">Go back to the homepage</a>

        </div>
    );
}

export default NotFound;
