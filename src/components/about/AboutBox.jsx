import React from 'react';

const AboutBox = () => {
    return ( 
        <div className='about__boxes grid'>
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">
                        13
                    </h3>
                    <span className="about__subtitle">
                        Projet terminé
                    </span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">
                        21
                    </h3>
                    <span className="about__subtitle">
                       tasse de café
                    </span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">
                        5
                    </h3>
                    <span className="about__subtitle">
                        Client satisfait
                    </span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">
                        7
                    </h3>
                    <span className="about__subtitle">
                       Gagnant des nominés
                    </span>
                </div>
            </div>
        </div>
        );
}
 
export default AboutBox;