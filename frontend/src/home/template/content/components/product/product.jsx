import React from 'react';
import Gallery from '../gallery/gallery';
import If from '../if/if';
import './product.css';

export default props => (
    <div className="product-container">
        <div className="gallery">
            <Gallery images={props.product.images} keyGallery={props.product.id}/>
        </div>
        <div className="descriptionOfProduct">
            <h2>{props.product.name}&nbsp;&nbsp;&nbsp;<a href="javascript:void();"><i className="far fa-heart"></i></a></h2>
            <div className="price-buy">
                <If show={props.product.price.best_price}>
                    <div className="best-price">
                        <p>Melhor Preço</p>
                    </div>
                </If>
                <div className="installments">
                    <p className="green-font"><span className="small-font">{props.product.price.installments}x&nbsp;R$</span>&nbsp;{props.product.price.installmentValue}</p>
                    <p>ou&nbsp;<span className="green-font">R$&nbsp;{props.product.price.value}&nbsp;</span>á vista</p>
                </div>
                <div className="addCart">
                    <button onClick={() => props.handleSearchProduct(props.product.id)} className="green-button">Adicionar ao carrinho&nbsp;<i className="fas fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    </div>
)