import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        var {cartItem} = this.props;
        return (
            <div className="total-price">
                <div className="total">Total: $ {this.displayTotalPrice(cartItem)}</div>
          </div>
        );
    }

    displayTotalPrice = (cartItem) => {
        var total = null;
        if(cartItem.length > 0) {
            for(var i = 0; i < cartItem.length; i++) {
                total += cartItem[i].product.price * cartItem[i].quantity;
            }
        }
        return total;
    }
}

export default CartTotal;