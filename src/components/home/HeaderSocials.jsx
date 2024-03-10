import React from 'react';

const HeaderSocials = () => {
    return ( 
        <div className="home__socials">
            <a target='_blank' href="https://join.skype.com/invite/O4qhT4qYEk7B" className="home__socials-link">
                <i class="fa-brands fa-skype"></i>
            </a>

            <a href="https://www.linkedin.com/in/sahaza-nomena-razafimandimby-80b117227" className="home__socials-link" target='_blank'>
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/SakaizaNomena" className="home__socials-link" target='_blank'>
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="mailto:sakaizanomena@gmail.com" className="home__socials-link" target='_blank'>
                 <i class="fa-regular fa-envelope"></i>
            </a>

            <a href="https://web.facebook.com/profile.php?id=100081938586115" className="home__socials-link" target='_blank'>
                 <i class="fa-brands fa-facebook"></i>
            </a>

            <a href="tel:+261326175344" className="home__socials-link" target='_blank'>
                <i class="fa-solid fa-phone"></i>
            </a>
        </div>
     );
}
 
export default HeaderSocials;