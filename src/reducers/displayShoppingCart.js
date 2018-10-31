import * as Types from './../constants/ActionType';

const cartInitialState = {
    isDisplayShoppingCart: false,
}
const shoppingCart = (state = cartInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_SHOPPING_CART_STATUS :
            return {...state, isDisplayShoppingCart: !state.isDisplayShoppingCart}
        default:
            return state
    }
}
export default shoppingCart;