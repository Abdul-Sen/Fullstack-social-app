import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

function Header(props)
{
    return (
        <Fragment>
           <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
            <Link to={'/register'}>
                <button>Register</button>
            </Link>
        </Fragment>
    )
}

export default Header;