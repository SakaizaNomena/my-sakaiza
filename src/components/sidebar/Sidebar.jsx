import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
    return ( 
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <div className="nav__list">
                        <ul>
                        <li className="nav_item">
                            <a href="#home" className="nav__link"><i className="icon-home"></i></a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav__link"><i className="icon-user-following"></i></a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav__link"><i className="icon-briefcase"></i></a>
                        </li>

                        <li className="nav_item">
                            <a href="#resume" className="nav__link"><i className="icon-graduation"></i></a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link"><i className="icon-layers"></i></a>
                        </li>

                        <li className="nav_item">
                            <a href="#testimonials" className="nav__link"><i className="icon-note"></i></a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav__link"><i className="icon-bubble"></i></a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="nav__footer">
                <span className='copyright'>
                &copy; 2022 - 2023
                </span>
            </div>
        </aside>
     );
}
 
export default Sidebar;
<div>
    Sidebar
</div>