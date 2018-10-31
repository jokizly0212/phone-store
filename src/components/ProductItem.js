import React, { Component } from 'react';
import { MSG_ADD_TO_CART_SUCCESS } from './../constants/Message';

class ProductItem extends Component {
    render() {
        var {product} = this.props;
        return (
            <div className="col-lg-3 col-md-6 mb-4 text-center wow fadeInUp">
                <div className="item-wrapper">
                    <img src={product.image} alt={product.name} className="layer1 img-fluid" />
                    <div className="layer-price">
                        <span className="badge badge-danger">$ {product.price}</span>
                    </div>
                    <div className="layer2"></div>
                    <div className="layer3">{product.name}</div>
                    <div className="layer4">
                    <div className="icons-shopping">
                        <i className="fas fa-shopping-cart" onClick = {()=>this.onClickAddToCart(product)} />
                        <i className="fas fa-heart" />
                        <i className="far fa-eye" />
                    </div>
                    <span className="check-it-out" onClick = {()=>this.onClickCheckItOut(product)}>Check it out
                        <i className="fas fa-chevron-right" />
                    </span>
                    </div>
                </div>
            </div>
        );
    }

    onClickCheckItOut = (product) => {
        this.props.enableProductDetail();
        this.props.getProductData(product);
    }
    onClickAddToCart = (product) => {
        this.props.addToCart(product);
        this.props.displayNotifier();
        this.props.changeMessage(MSG_ADD_TO_CART_SUCCESS);
    }
}

export default ProductItem;