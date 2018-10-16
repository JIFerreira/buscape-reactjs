import React, { Component } from 'react';
import './gallery.css'

export default class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {mainImage: String, imageSelected: 0}
        this.selectImage = this.selectImage.bind(this);
    }

    componentWillMount(){
        this.setState({mainImage: this.props.images[0]})
    }

    selectImage(e){
        this.setState({imageSelected: e.currentTarget.childNodes[0].dataset.id });
        this.setState({mainImage: e.target.src});

    }

    render(){
        return(
            <div className="container-gallery">
                <div className="icon-images">
                    <ul>
                        {this.props.images.map((image, index) => <li key={image}  className={this.state.imageSelected == index ? 'image-selected' : ''}> <a href="#" onClick={(e) => this.selectImage(e)}><img src={image} data-id={index} onError={(e)=>{e.target.src="http://via.placeholder.com/250x250?text=Sem+Imagem"}}/></a></li>)}
                    </ul>
                </div>
                <div className="main-image">
                    {<img className="image" src={this.state.mainImage} onError={(e)=>{e.target.src="http://via.placeholder.com/250x250?text=Sem+Imagem"}}/>}
                </div>
            </div>
        )
    }
}