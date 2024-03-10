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
                        Passionné par les nouvelles technologies de l'information, je suis constamment avide d'apprendre et de m'adapter rapidement aux dernières avancées technologiques. Mon expérience m'a permis de m'intégrer facilement à des projets en cours et de les aborder avec efficacité. Depuis mes années de lycée, je suis un autodidacte passionné, toujours en quête de nouvelles compétences et de connaissances pour me perfectionner dans mon domaine
                            <br />
                            <br />
                            <a href="https://my-sakaiza.netlify.app/my_cv.pdf" download className="btn">Download CV</a>
                        </div>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    Symfony
                                </h3>
                                <span className="skills__number">
                                    98%
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
                                    React native (Android / IOS)
                                </h3>
                                <span className="skills__number">
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
                                    React - nextjs 
                                </h3>
                                <span className="skills__number">
                                    87%
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage data">
                                        
                                </span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    DevOps
                                </h3>
                                <span className="skills__number">
                                    70%
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage last">
                                        
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