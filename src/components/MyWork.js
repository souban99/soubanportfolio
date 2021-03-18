import React from 'react';
import portfolio01 from '../img/portfolio-01 copy.jpg';
import portfolio02 from '../img/portfolio-02 copy.jpg';
import portfolio03 from '../img/portfolio-03 copy.jpg';
import portfolio04 from '../img/portfolio-04 copy.jpg';
import portfolio05 from '../img/portfolio-05 copy.jpg';
import portfolio06 from '../img/portfolio-06 copy.jpg';
import portfolio07 from '../img/portfolio-07 copy.jpg';
import portfolio08 from '../img/portfolio-08 copy.jpg';
import '../styles/MyWork.css';

const MyWork = () => {
    return (
        <>
            <h2 className="section__title">My work</h2>
            <p className="section__subtitle section__subtitle--work">Previous Work</p>

            <div className="portfolio">

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio01} alt="" className="portfolio__img" />
                </a>

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio02} alt="" className="portfolio__img" />
                </a>

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio03} alt="" className="portfolio__img" />
                </a>

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio04} alt="" className="portfolio__img" />
                </a>

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio05} alt="" className="portfolio__img" />
                </a>

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio06} alt="" className="portfolio__img" />
                </a>

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio07} alt="" className="portfolio__img" />
                </a>

                <a href="#portfolio" className="portfolio__item">
                    <img src={portfolio08} alt="" className="portfolio__img" />
                </a>

            </div>
        </>

    )
}

export default MyWork;