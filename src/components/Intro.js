import React from 'react';
import imgPortrait from '../img/img-iian copy.jpg';
import '../styles/Intro.css';


const Intro = () => {
    return (
        <>
            <h1 className="section__ title section__title--intro">
                Hi, I am <strong> Souban </strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">UI/UX Designer & Frontend Developer</p>
            <img src={imgPortrait} alt="x" className="intro__img" />

        </>
    )

}

export default Intro;