import React from 'react';

const Card = (props) => {
    return ( 
        <div className="timeline__item">
            <i className={props.icon}></i>
            <div className="timeline__date">
                {props.year}
            </div>
            <div className="timeline__title">
                {props.title}
            </div>
            <div className="timeline__text">
                {props.desc}
            </div>
        </div>
     );
}
 
export default Card;