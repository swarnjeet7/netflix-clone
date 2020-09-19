import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            handleShow(window.scrollY > 100)
        });
        return ()=> {
            window.removeEventListener('scroll');
        }
    }, [])
    return (
        <nav className={`nav ${show && 'nav__black'}`}>
            <img src="/netflix-clone/img/logo.png" className="nav__logo" />
            <img src="/netflix-clone/img/smile.png" className="nav__smile" />
        </nav>
    )
}

export default Nav;
