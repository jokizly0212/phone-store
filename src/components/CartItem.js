import React, { Component } from 'react';
import {MSG_DELETE_PRODUCT_IN_CART_SUCCESS} from './../constants/Message';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quantity: 1
    }
}
  


    render() {
      var {cartItem} = this.props;
      var {quantity} = cartItem.quantity > 0 ? cartItem : this.state;
      console.log(quantity);
      
        return (

            <div className="cart-item mb-4">
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <img src={cartItem.product.image} alt={cartItem.product.name} />
                    </div>
                    <div className="col-4">
                      <div className="item-name">{cartItem.product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="btn-group">
                        <div className="btn btn-danger" onClick = {()=>this.updateProductInCart(cartItem.product, cartItem.quantity - 1)}>-</div>
                        <input type="number" readOnly value = {quantity} />
                        <div className="btn btn-danger" onClick = {()=>this.updateProductInCart(cartItem.product, cartItem.quantity + 1)}>+</div>
                      </div>
                    </div>
                    <div className="col-2 text-center">
                      <div className="item-price">$ {this.calcPrice(cartItem.product.price, quantity)}</div>
                    </div>
                    <div className="col-1">
                      <i className="fas fa-window-close" onClick = {()=>this.onClickDelete(cartItem.product )} />
                    </div>
                  </div>
                </div>
              </div>
        );
    }
    calcPrice = (price, quantity) => price * quantity;
    updateProductInCart = (product, quantity) => {
      if(quantity > 0) {
        this.setState({
          quantity: quantity
        });
        this.props.updateProductInCart(product, quantity);
      }
    }
    onClickDelete = (product) => {
      this.props.deleteCartItem(product);
      this.props.displayNotifier();
      this.props.changeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
}

export default CartItem;