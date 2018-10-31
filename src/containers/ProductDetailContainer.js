import React, { Component } from 'react';
import ProductDetail from './../components/ProductDetail';
import { actionDisableProductDetail } from './../actions/index';
import {connect} from 'react-redux';

class ProductDetailContainer extends Component {
    render() {
        return (
            <div>
                {this.displayProductDetail()}
            </div>
        );
    }

    displayProductDetail = () => {
        var {isDisplayDetail, disableProductDetail, product} = this.props;
        var result = null;
        if(isDisplayDetail) {
            result = <ProductDetail 
                            disableProductDetail = {disableProductDetail}
                            product = {product}
                    />
        }
        return result;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayDetail: state.detail.isDisplayDetail,
        product: state.detail.product
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        disableProductDetail: () => {
            dispatch(actionDisableProductDetail())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);