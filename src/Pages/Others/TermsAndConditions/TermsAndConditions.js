import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Here Terms and conditions</h2>
            <p>Go back t : <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;