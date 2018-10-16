import React, { Component } from 'react';

import Header from './template/header/header';
import Content from './template/content/content';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {shoppingCarItems: Number, viewShoppingCar: false}

        this.handleCountItemsInShoppingCar = this.handleCountItemsInShoppingCar.bind(this);
        this.handleViewShoppingCar = this.handleViewShoppingCar.bind(this);
    }

    handleCountItemsInShoppingCar(count){
        this.setState({shoppingCarItems: count});
    }

    handleViewShoppingCar(){
        if(this.state.viewShoppingCar){
            this.setState({viewShoppingCar: false});
        }else{
            this.setState({viewShoppingCar: true});
        }
    }

    render(){
        return(
            <div>
                <Header countItemsInCar={this.state.shoppingCarItems} viewShoppingCar={this.handleViewShoppingCar}/>
                <Content eventItemsInCar={this.handleCountItemsInShoppingCar} shoppingCar={this.state.viewShoppingCar}/>
            </div>
        )
    }
}