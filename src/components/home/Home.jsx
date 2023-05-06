import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return ( 
       <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" />
                <h1 className="home__name">Sakaiza Nomena</h1>
                <span className="nome__education">
                    Je suis developpeur Back-End
                </span>

                <HeaderSocials />

                <a href="#contact" className="btn">Me contacter</a>

                <ScrollDown />
            </div>
       </section>
     );
}
 
export default Home;