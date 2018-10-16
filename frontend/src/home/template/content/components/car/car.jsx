import React, { Component } from 'react';
import './car.css';

export default class Carrinho extends Component{
    render(){
        console.log('carrinho', this.props.itemsInCar);
        return(
            <div className="car">
                <div className="container-car">
                        {this.props.itemsInCar.map(item => (
                            <div className="items" key={item.id}>
                                <div className="image-product">
                                    <img src={item.images[0]} alt="Image of product"/>
                                </div>
                                <div className="descriptionOfProduct">
                                    <h2>{item.name}</h2>
                                    <div className="price-buy">
                                        <div className="installments">
                                            <p><span className="small-font">{item.price.installments}x&nbsp;R$</span>&nbsp;{item.price.installmentValue}</p>
                                            <p>ou&nbsp;R$&nbsp;{item.price.value}&nbsp;á vista</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="remove-item">
                                    <a href="javascript:void();" onClick={() => this.props.removeItemInCar(item.id)}>x</a>
                                </div>
                            </div>
                        ))}
                    <div className="payment">
                        <div className="container-payment">
                            <h3>subtotal</h3>
                            <div className="installments">
                                <p><span className="small-font">{this.props.paymentShoppingCar.installments}x&nbsp;R$</span>&nbsp;{this.props.paymentShoppingCar.installmentValue}</p>
                                <p>ou&nbsp;<span>R$&nbsp;{this.props.paymentShoppingCar.value}&nbsp;</span>á vista</p>
                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}