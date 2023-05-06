import React from 'react';
import './About.css';
import Me from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';

const About = () => {
    return ( 
        <section className="about container section" id='about'>
            <h2 className="section__title">
                Apropos de moi
            </h2>
            <div className="about__container grid">
                <img src={Me} alt="" className='about__image' />
                <div className="about__data grid">
                    <div className="about__info">
                        <div className="about__description">
                            Passionné par la nouvelle technologie de l'information. Apte a s'adepter avec des nouvelles techno en une durré tres courte.
                            Capable de se plongé dans un projet déjà en cours. Autodidact depuis la classe sécondaire...
                            <br />
                            <br />
                            <a href="" className="btn">Download CV</a>
                        </div>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    Development
                                </h3>
                                <span className="skills__number">
                                    95%
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development">
                                        
                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    DevOps
                                </h3>
                                <span className="skills__numbe">
                                    60%
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage devops">
                                        
                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    Database admin 
                                </h3>
                                <span className="skills__number">
                                    95%
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage data">
                                        
                                </span>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

        <AboutBox />
        </section>
     );
}
 
export default About;
<div>
    About
</div>