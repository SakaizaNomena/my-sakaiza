import React from 'react';
import './Contact.css';

const Contact = () => {
    return ( 
       <section className="contact container section" id="contact">
            <h2 className="section__title">
                Me contacter
            </h2>
            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">
                        Parlons de tout
                    </h3>
                    <p className="contact__details">
                        Shalom, Salut, ...
                    </p>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__form-div">
                        <input type='text' className="contact__form-input" placeholder='Insérez votre nom'></input>
                    </div>
                    <div className="contact__form-div">
                        <input type='email' className="contact__form-input" placeholder='Insérez votre email'></input>
                    </div>
                    <div className="contact__form-div">
                        <input type='text' className="contact__form-input" placeholder='IInsérez votre sujet'></input>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name='' id='' cols="30" row='10' className='contact__form-input' placeholder='Rédigez votre message'></textarea>
                    </div>
                    <button className="btn">Send Message</button>
                </form>
            </div>
       </section>
     );
}
 
export default Contact;