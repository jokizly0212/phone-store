import React, { Component } from 'react';

class ShoppingCart extends Component {
    render() {
      var {displayCartItem, displayCartTotal} = this.props;
        return (
            <section className="cart animated slideInRight">
            <div className="cart-tlt">Recently Added<i className="fas fa-times-circle float-right" onClick = {()=>this.closeShoppingCart()} /></div>
            <div className="cart-items-wrapper">
              {displayCartItem}
            </div>
            {displayCartTotal}

            <div className="buttons-pay">
              <div className="btn btn-light">Pay with <img src="https://1.bp.blogspot.com/-lbTr7tx5SME/WlBeyMCLavI/AAAAAAAAAq4/vcdzjqle48QvyQ1aJI-RBSFLkn_h0f9CgCLcBGAs/s1600/ma-code-visa-la-gi.jpg" alt="" /></div>
              <div className="btn btn-light">Pay with <img src="http://www.onlinecasinoreports.com.vn/images/mastercard.jpg" alt="" /></div>
            </div>
          </section>
        );
    }

    closeShoppingCart = () => {
        this.props.changeShoppingCartStatus();
    }
}

export default ShoppingCart;