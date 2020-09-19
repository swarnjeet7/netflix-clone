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
            <img src="/img/logo.png" className="nav__logo" />
            <img src="/img/smile.png" className="nav__smile" />
        </nav>
    )
}

export default Nav;
