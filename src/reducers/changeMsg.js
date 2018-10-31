import * as Message from './../constants/Message';
import * as Types from './../constants/ActionType';

const messageInitialState = Message.MSG_WELCOME;
const message = (state = messageInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}
export default message;