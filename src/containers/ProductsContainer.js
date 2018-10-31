import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import { actionEnableProductDetail, actionGetProductData, actionAddToCart, actionChangeMessage, actionDisplayNotifier } from './../actions/index';
import ProductItem from './../components/ProductItem';

class ProductsContainer extends Component {
    render() {
        return (
            <div>
                <Products displayProducts = {this.displayProducts()}/>
            </div>
        );
    }

    displayProducts = () => {
        var {products, enableProductDetail, getProductData, addToCart, displayNotifier, changeMessage} = this.props;
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem product = {product}
                                    key ={index}
                                    enableProductDetail = {enableProductDetail}
                                    getProductData = {getProductData}
                                    addToCart = {addToCart}
                                    displayNotifier = {displayNotifier}
                                    changeMessage = {changeMessage}
                        />
            })
        }
        return result;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        enableProductDetail: () => {
            dispatch(actionEnableProductDetail())
        },
        getProductData: (product) => {
            dispatch(actionGetProductData(product))
        },
        addToCart: (product) => {
            dispatch(actionAddToCart(product, 1))
        },
        displayNotifier: () => {
            dispatch(actionDisplayNotifier())
        },
        changeMessage: (message) => {
            dispatch(actionChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)