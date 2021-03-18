import React, { Component } from 'react';
import logo from '../img/loogo copy.png';
import '../styles/Header.css';


class Header extends Component {

    toggleClass = () => {
        const navToggle = document.querySelector('.nav-toggle');
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });

        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            })
        })
    }

    render() {
        return (
            <>
                <div className="logo">
                    <img src={logo} alt="x" />
                </div>

                <button onClick={this.toggleClass} className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>

                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">My Service</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact me</a></li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Header;