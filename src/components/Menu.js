import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { changeShoppingCartStatus } from './../actions/index';
// z

class Menu extends Component {
    render() {
        return (

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand logo" >Electros</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto menu-right">
                            <li className="nav-item active">
                                <a className="nav-link" >Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Demos &amp; Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    <i className="fas fa-shopping-cart" data-toggle="tooltip" data-placement="bottom" title="Check Your Cart" onClick = {()=>this.displayShoppingCart()} />
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

                
        );
    }
    
    displayShoppingCart = () => {
        this.props.changeShoppingCartStatus()
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayShoppingCart: state.shoppingCart.isDisplayShoppingCart
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeShoppingCartStatus: () => {
            dispatch(changeShoppingCartStatus())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);