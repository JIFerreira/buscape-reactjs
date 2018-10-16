import React from 'react';
import './header.css';
import Buscape from './logo-buscape.png';

export default props => (
    <header>
        <div className="header">
            <div className="logo-buscape">
                <a href="#">
                    <img className="logo" src={Buscape} alt="Buscapé"/>
                </a>
            </div>
            <div className="menu-bar">
                <span className="items-in-shoppingCar">{props.countItemsInCar}</span>
                <a href="#" onClick={props.viewShoppingCar}>
                    <i className="fas fa-bars fa-2x"></i>
                </a>
            </div>
        </div>
    </header>
    
)