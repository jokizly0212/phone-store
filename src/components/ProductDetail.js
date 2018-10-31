import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        var {disableProductDetail, product} = this.props;
        return (
            <section className="display-product">
                <div className="dark-bg" />
                <div className="product-wrapper">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={product.image} alt="product" />
                    </div>
                    <div className="col-sm-6 col-detail">
                        <h3 className="product-name">{product.name}</h3>
                        <i className="close fas fa-times float-right" onClick = {disableProductDetail} />
                        <ul className="rating">
                            <span className="product-detail">Rating: </span>
                            <li>
                                {this.displayRating(product.rating)}
                            </li>
                        </ul>
                        <div className="origin"><span className="product-detail">Origin:</span>  {product.origin}</div>
                        <div className="specification"><span className="product-detail">Specification: </span> {product.specification}</div>
                        <div className="product-price"><span className="product-detail">Price:</span> <span className="badge badge-danger">$ {product.price}</span></div>
                        <div className="btn btn-outline-success configuration">Detailed Configuration <i className="fas fa-wrench" /></div>
                        <div className="btn btn-outline-danger">Add To Cart <i className="fas fa-shopping-cart" /></div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }


    onClickCheckitout = (product) => {
        console.log(product.id);
    }
    displayRating = (rating) => {
        var result = [];
        for(var i = 1; i <= rating; i++) {
            result.push(<i key = {i} className="fas fa-star"/>)
        }
        for(var j = 1; j <= 5 - rating; j++) {
            result.push(<i key = {i+j} className="far fa-star"/>)
        }
        return result;
    }
}
export default ProductDetail;
