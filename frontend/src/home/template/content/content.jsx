import React, { Component } from 'react';
import axios from 'axios';

import Product from './components/product/product';
import Car from './components/car/car';
import If from './components/if/if';

import './content.css';

export default class Content extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            products: [],
            shoppingCar: [],
            valueShoppingCar: []
        }
    
        this.valueShoppingCar = this.valueShoppingCar.bind(this);
        this.handleSearchProduct = this.handleSearchProduct.bind(this);
        this.handleAddProductInShoppingCart = this.handleAddProductInShoppingCart.bind(this);
        this.handleRemoveProductInShoppingCart = this.handleRemoveProductInShoppingCart.bind(this);
        this.componentDidMount= this.componentDidMount.bind(this);
        this.reload = this.reload.bind(this);
    }
    
    reload(){
        axios.get('http://localhost:3000/shoppingCar')
            .then(resp => {
                this.setState({shoppingCar: resp.data}),
                this.props.eventItemsInCar(resp.data.length),
                this.valueShoppingCar(resp.data)
            })
            
        axios.get('http://localhost:3000/valueShoppingCar')
            .then(resp => (
                this.setState({valueShoppingCar: resp.data}),
                console.log('aqui', this.state.valueShoppingCar)
            ));
    }

    valueShoppingCar(items){

        function organizeMoneyFormat(n) {
            return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1."); 
        };

        let finallyResult = {};

        if(items.length > 1){
            let valueExtractedOfCar = [], 
            installmentValueExtractedOfCar = [];

            let value,
                valueFinally,
                installments = 10,
                installmentValueFinally,
                installmentValue;

            items.map(item => {
                valueExtractedOfCar.push(item.price.value);
                installmentValueExtractedOfCar.push(item.price.installmentValue);
            });

            value = valueExtractedOfCar.reduce((a, b) => a + b, 0); 
            installmentValue = installmentValueExtractedOfCar.reduce((a, b) => a + b, 0);
            installmentValueFinally = organizeMoneyFormat(installmentValue / installments);
            valueFinally = organizeMoneyFormat(value / installments);

            finallyResult = {
                "value": valueFinally,
                "installments": installments,
                "installmentValue": installmentValueFinally
            }
        }else if(items.length == 0){

            finallyResult = {
                "value": 0,
                "installments": 0,
                "installmentValue": 0
            }
        }else{
            let valueExtractedOfCar = [], 
                installmentValueExtractedOfCar = [];

            let value,
                installments = 10,
                installmentValueFinally,
                valueFinally,
                installmentValue;

            items.map(item => {
                valueExtractedOfCar.push(item.price.value);
                installmentValueExtractedOfCar.push(item.price.installmentValue);
            });
            debugger;
            value = valueExtractedOfCar[0]; 
            installmentValue = installmentValueExtractedOfCar[0];
            installmentValueFinally = organizeMoneyFormat(installmentValue);
            valueFinally = organizeMoneyFormat(value);

            finallyResult = {
                "value": valueFinally,
                "installments": installments,
                "installmentValue": installmentValueFinally
            }
        }

        axios.put('http://localhost:3000/valueShoppingCar', finallyResult)
            .then(resp => {
                this.setState({valueShoppingCar: resp.data})
            });
        
    }

    componentDidMount(){
        axios.get('http://localhost:3000/items')
            .then(resp => this.setState({products: resp.data}));

        axios.get('http://localhost:3000/shoppingCar')
            .then(resp => (
                this.setState({shoppingCar: resp.data}),
                this.valueShoppingCar(resp.data),
                this.props.eventItemsInCar(resp.data.length)
            ));
    }

    handleAddProductInShoppingCart(item){
        axios.post(`http://localhost:3000/shoppingCar`, item)
            .then(resp => (
                this.reload()
            ))
            .catch((e) => {
                console.log(e);
            });
    }
    
    handleSearchProduct(item){
        axios.get(`http://localhost:3000/items?id=${item}`)
            .then((resp) => {
                let returnOfSearch = resp.data[0];
                this.handleAddProductInShoppingCart(returnOfSearch);
            })
    }

    handleSearchProductInCar(item){
        axios.get(`http://localhost:3000/shoppingCar?id=${item}`)
            .then((resp) => {
                let returnOfSearch = resp.data[0].id;
                this.handleRemoveProductInShoppingCart(returnOfSearch);
            })
    }
    
    handleRemoveProductInShoppingCart(idOfCarInCar){
        axios.delete(`http://localhost:3000/shoppingCar/${idOfCarInCar}`)
        .then(resp => (
            this.reload()
        ))
        .catch((e) => {
            console.log(e)
        });
    }

    render(){
        return(
            <main>
                <If show={this.props.shoppingCar}>
                    <Car itemsInCar={this.state.shoppingCar} removeItemInCar={this.handleRemoveProductInShoppingCart} paymentShoppingCar={this.state.valueShoppingCar}/>
                </If>
                
                <div className="products">
                    {
                        this.state.products.map(
                            elemnt => (
                                <Product 
                                            key={elemnt.id} 
                                            product={elemnt}
                                            handleSearchProduct={this.handleSearchProduct}
                                />
                            )
                        )
                    }
                </div>
            </main>
        )
    }
}