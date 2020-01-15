import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
// import * as ROUTES from '../../routes/routes';
import * as ROUTES from '../../routes/route';

function Header(props)
{
    return (
        <Fragment>
           <Link to={ROUTES.HOME}>
                <button>Home</button>
            </Link>
            <Link to={ROUTES.LOGIN}>
                <button>Login</button>
            </Link>
            <Link to={ROUTES.REGISTER}>
                <button>Register</button>
            </Link>
        </Fragment>
    )
}

export default Header;