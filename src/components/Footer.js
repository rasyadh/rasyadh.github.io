import React from 'react';
import LogoDark from '../assets/image/logo-dark.png';

const Footer = props => {
    return (
        <footer className="footer">
            <div className="container">
                <img src={LogoDark} alt="RSDH" />
                <span className="is-pulled-right">
                    <b>RSDH</b> by Rasyadh Abdul Aziz.
                </span>
            </div>
        </footer>
    )
}

export default Footer;