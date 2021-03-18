import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <>
            <a href="mailto:hello@ian.dev" id="contact" className="footer__link">uni.m.souban@outlook.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.instagram.com/maidansiddique">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="http://dribbble.com">
                        <i className="fab fa-dribbble"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/maidansiddique">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Footer;