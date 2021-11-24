import React from 'react'
import {Link} from  'react-router-dom';

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>

            <p>
                or <Link to="/register">Register</Link>
            </p>
        </div>
    )
}

export default LoginPage
