import React from 'react';

import '../styles/Service.css';

const Service = () => {
    return (
        <>
            <h2 className="section__title section__title--services">What I do?</h2>
            <div className="services">

                <div className="service">
                    <h3>Graphic Design</h3>
                    <p>Developing highly responsive design models for various products and organizations. 
                        Experience of designing on Photoshop, Illustrator and Corel Draw </p>
                </div>

                <div className="service">
                    <h3>UI/UX Design</h3>
                    <p>Designing highly attractive user interface for mobile and web applications.
                        Creating the flow of application functionalities to optimize user experience</p>
                </div>

                <div className="service">
                    <h3>Frontend Development</h3>
                    <p>Building resposive website front end using Reactjs. 
                        Developing mobile applications React Native and solo android apps using Kotlin</p>
                </div>

            </div>
            <a href="#work" className="btn">See My Work</a>
        </>
    )
}

export default Service;