import React, { useState } from 'react';
import './Portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })

        setItems(updatedItems);
    }
    return ( 
       <section className="work container section" id="portfolio">
            <h2 className="section__title">
                Projet réçent
            </h2>
            <div className="work__filters">
                <span className="work__item"onClick={() =>setItems(Menu)} >Tous</span>
                <span className="work__item" onClick={() =>filterItem('Back-End')}>Back</span>
                <span className="work__item" onClick={() =>filterItem('Front-End')}>Front</span>
                <span className="work__item" onClick={() =>filterItem('Mobil')}>Mobil</span>
                {/* <span className="work__item">Branding</span> */}
                
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const{id, image, title, category} = elem;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className='work__img' />
                                <div className="work__mask">

                                </div>
                                <span className="work__category">
                                    {category}
                                </span>
                            </div>
                            <h3 className="work__title">
                                {title}
                            </h3>
                            <a href="#" className="work__button">
                                <i className='icon-link work_button-con'></i>
                            </a>
                        </div>
                    )
                })}
            </div>
       </section>
     );
}
 
export default Portfolio;