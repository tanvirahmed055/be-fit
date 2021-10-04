import React from 'react';
import './NotFoundContent.css';

const NotFoundContent = () => {
    return (
        <div className="notfound-container d-flex align-items-center justify-content-center">
            <div>
                <h1 className="fw-bolder notfound-header">Page Not</h1>
                <h1 className="fw-bolder notfound-header">Found</h1>
                <h6>The page you were looking for could not be found.</h6>
                <h6>It might have been removed, renamed, or did not exist in the first place.</h6>
            </div>
        </div>
    );
};

export default NotFoundContent;