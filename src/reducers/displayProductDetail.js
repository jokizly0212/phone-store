import * as Types from './../constants/ActionType';

const detailInitialState = {
    isDisplayDetail: false,
    product: {}
}
const detail = (state = detailInitialState, action) => {
    switch (action.type) {
        case Types.ENABLE_PRODUCT_DETAIL:
            return {...state, isDisplayDetail: true}
        case Types.DISABLE_PRODUCT_DETAIL:
            return {...state, isDisplayDetail: false}
        case Types.GET_DATA_PRODUCT:
            return {...state, product: action.product}
        default:
            return state
    }
}
export default detail;