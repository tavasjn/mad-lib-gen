import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                MAD LIB THEATER
            </div>
            <Link to='/inputs' >
                <button className='header-button'>START AGAIN</button>
            </Link>
        </div>
    )
}


export default Header;