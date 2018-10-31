import React, { Component } from 'react';
import { changeShoppingCartStatus, updateProductInCart, actionDeleteCartItem, actionChangeMessage, actionDisplayNotifier } from './../actions/index';
import ShoppingCart from './../components/ShoppingCart';
import { connect } from 'react-redux'; 
import CartItem from './../components/CartItem';
import CartTotal from './../components/CartTotal';

class CartContainer extends Component {


    render() {
        return (
            <div>
                {this.displayShoppingCart()}
            </div>
        );
    }

    displayShoppingCart = () => {
        var result = null;
        var {isDisplayShoppingCart, changeShoppingCartStatus} = this.props;
        if(isDisplayShoppingCart) {
            result = <ShoppingCart
                        changeShoppingCartStatus = { changeShoppingCartStatus }
                        displayCartItem = {this.displayCartItem()}
                        displayCartTotal = {this.displayCartTotal()}
                    />
        }
        return result;
    }

    displayCartItem = () => {
        var {cartItem, deleteCartItem, updateProductInCart, changeMessage, displayNotifier} = this.props;
        var result = null;
        if(cartItem.length > 0) {
            result = cartItem.map((cartItem, index) => {
                return <CartItem 
                            cartItem = {cartItem} 
                            key ={index}
                            deleteCartItem = {deleteCartItem}
                            updateProductInCart = {updateProductInCart}
                            changeMessage = {changeMessage}
                            displayNotifier = {displayNotifier}
                        />
            })
        }
        return result;
    }

    displayCartTotal = () => {
        var {cartItem} = this.props;
        var result = 0;
        if(cartItem.length > 0) {
            result = <CartTotal cartItem = {cartItem} />
        }
        return result;
    }

    
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayShoppingCart: state.shoppingCart.isDisplayShoppingCart,
        cartItem: state.cartItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeShoppingCartStatus: () => {
            dispatch(changeShoppingCartStatus())
        },
        updateProductInCart: (product, quantity) => {
            dispatch(updateProductInCart(product, quantity))
        },
        deleteCartItem: (product) => {
            dispatch(actionDeleteCartItem(product))
        },
        changeMessage: (message) => {
            dispatch(actionChangeMessage(message))
        },
        displayNotifier: () => {
            dispatch(actionDisplayNotifier())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);