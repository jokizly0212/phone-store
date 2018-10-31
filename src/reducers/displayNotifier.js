import * as Types from './../constants/ActionType';

const notifierInitialState = {
    isDisplayNotifier: false
}
const notifier = (state = notifierInitialState, action) => {
    switch (action.type) {
        case Types.DISPLAY_NOTIFIER:
            return {...state, isDisplayNotifier: true}
        case Types.DELETE_NOTIFIER:
            return {...state, isDisplayNotifier: false}
        default:
            return state
    }
}

export default notifier;