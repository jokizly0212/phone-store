import React, { Component } from 'react';

class Products extends Component {
    render() {
        var {displayProducts} = this.props;
        return (
            <div className="products">
                <div className="container-fluid">
                <div className="row">
                    {displayProducts}
                </div>
                </div>
            </div>
        );
    }
}

export default Products;