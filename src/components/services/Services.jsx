import React from 'react';
import './Services.css';
import Image1 from '../../images/symfony_black_03.png';
// import Image1 from '../../assets/service-1.svg';
import Image2 from '../../images/react.png';
// import Image2 from '../../assets/service-2.svg';
import Image3 from '../../images/devopss.png';
// import Image3 from '../../assets/service-3.svg';

const data = [
    {
      id: 1,
      image: Image1,
      title: "Back-End",
      description:
        "Fort d'une solide expérience en développement back-end, je suis capable de concevoir des applications web robustes et évolutives. Mes compétences étendues incluent la manipulation avancée de Symfony, notamment API Platform et la gestion de l'état (state management), me permettant ainsi de concevoir des API performantes et des systèmes complexes. Passionné par l'optimisation et la qualité du code, mon engagement est de fournir des solutions exceptionnelles dans tous les projets auxquels j'ai contribué dans mes expériences professionnelle",
    },
    {
      id: 2,
      image: Image2,
      title: "Front-End",
      description:
        "Doté d'une solide expérience en développement React, React Native, Next.js, Sass et Firebase. Grâce à ces compétences, je suis en mesure de concevoir des interfaces utilisateur interactives et réactives, aussi bien pour les applications web que mobiles. Mon expertise inclut l'utilisation efficace de Sass pour la gestion des styles, ainsi que Firebase pour la mise en place de back-ends évolutifs et sécurisés. Passionné par l'innovation et la création d'expériences utilisateur exceptionnelles, je m'engage à fournir des solutions de haute qualité dans tous les projets auxquels je contribue",
    },
    {
      id: 3,
      image: Image3,
      title: "Database",
      description:
        "Passionné par l'automatisation et l'optimisation des flux de travail, je maîtrise les outils tels que Docker, GitLab et GitHub pour assurer un développement collaboratif efficace et une gestion de versions précise. Mon expertise s'étend également à l'utilisation de serveurs web comme Apache et Nginx, ainsi qu'à l'administration de serveurs Linux et l'utilisation de cPanel pour la gestion des hébergements. Soucieux de garantir des performances optimales, je suis également compétent en administration de bases de données.",
    },
  ];

const Services = () => {
    return ( 
        <section className="services container section" id='services'>
            <h2 className="section__title">
                Techno
            </h2>
            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className='services__img' width={70} />
                            <h3 className="services__title">
                                {/* {title} */}
                            </h3>
                            <p className="services__description">
                                {description}
                            </p>
                        </div>  
                    )
                })}
            </div>
        </section>
     );
}
 
export default Services;