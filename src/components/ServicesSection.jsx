import React from 'react';
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock'
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/faMoneyBill'
//import image
import Perfil from '../img/profile.jpg';

const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> comissions</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faClock} color="#23d997" />
                            <h3>Punctual</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faComments} color="#23d997" />
                            <h3>Taylor made</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPen} color="#23d997" />
                            <h3>Digital</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMoneyBill} color="#23d997" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>                    
                </div>
            </div>
            <div className="image">
                <img src={Perfil} alt="Dias"/>
            </div>
        </div>
    )
}

export default ServicesSection;