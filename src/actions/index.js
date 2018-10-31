import * as Types from './../constants/ActionType';


export const actionEnableProductDetail = () => {
    return {
        type: Types.ENABLE_PRODUCT_DETAIL
    }
}
export const actionDisableProductDetail = () => {
    return {
        type: Types.DISABLE_PRODUCT_DETAIL
    }
}
export const actionGetProductData = (product) => {
    return {
        type: Types.GET_DATA_PRODUCT,
        product
    }
}

export const changeShoppingCartStatus = () => {
    return {
        type: Types.CHANGE_SHOPPING_CART_STATUS
    }
}
export const updateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
export const actionAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actionDeleteCartItem = (product) => {
    return {
        type: Types.DELETE_CART_ITEM,
        product
    }
}
export const actionDisplayNotifier = () => {
    return {
        type: Types.DISPLAY_NOTIFIER
    }
}
export const actionDeleteNotifier = () => {
    return {
        type: Types.DELETE_NOTIFIER
    }
}
export const actionChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}