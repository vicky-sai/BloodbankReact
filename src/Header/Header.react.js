import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return ( <div >
            <h1>Navigation</h1>
        
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link> &emsp;
                    <Link to='/two'>Second content</Link>&emsp;
                    <Link to='/three'>Third content</Link>&emsp;
                    <Link to='/four'>Fourth content</Link>
                </li>
            </ul>
        </nav>
        </div>
    );

}

export default Header;