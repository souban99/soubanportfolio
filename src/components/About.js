import React from 'react';
import img from '../img/imgg.jpg';
import '../styles/About.css';

const About = () => {
    return (
        <>
            <h2 clsssName="section__title section__title--about">Who I am?</h2>
            <p className="section__subtitle section__subtitle--about">UI/UX Designer based Islamabad, Pakistan</p>
            <div className="about-me__body">
                <p>I am a frontend designer who has always developed a mature approach towards my goals and situations I face. 
                    Being a graduate in software engineering I have deep fond in developing and designing applications </p>
                <p>I love to give a look at the ideas or thought of my client. 
                    If you can imagine then I can make it real with my tools. 
                    I just believe that every design is so important because only a 
                    perfect design can attract an unknown person to your business.</p>
            </div>

            <img src={img} alt="" className="about-me__img" />
        </>

    )
}

export default About; 