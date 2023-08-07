import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <div id='headerDiv'>
            <h1><Link to='/'>FunDaily</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/'><p>커뮤니티</p></Link></li>
                    <li><Link to='/'><p>로그인</p></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;