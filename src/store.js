import { eventData } from './../firebaseEvent';

var redux = require('redux');

const eventInitialState = {
    isAddEvent: false,
    statusDisplay: true,
    formDisplay: false,
    editObject : {},
    changeEventStatus: null,
    isAlert: false,
    alertContent: '',
    alertType: ''
}
const allReducer = (state = eventInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            return {...state, statusDisplay: !state.statusDisplay}
        case "CHANGE_FORM_STATUS":
            return {...state, formDisplay: !state.formDisplay}
        case "ADD_EVENT":
        console.log(action.newEvent);
            eventData.push(action.newEvent);
            return state
        case "EVENT_DELETE":
            eventData.child(action.eventID).remove();
            return {...state, isDelete:true}
        case "GET_EVENT_STATUS":
            eventData.child(action.eventDatabase.id).update({
                status: !action.eventDatabase.status
            })
            return state
        case "GET_EVENT_DATA":
            return {...state, editObject: action.eventData}
        case "CHANGE_EDIT_NAMECARD":
            return {...state, isAddEvent: false}
        case "CHANGE_ADD_EVENT_NAMECARD":
            return {...state, isAddEvent: true}
        case "CLEAR_FORM":
            return {...state, editObject: action.emptyObject}
        case "GET_EDITED_DATA":
            eventData.child(action.editedData.id).update({
                event : action.editedData.event,
                status : action.editedData.status
            })
            return state
        case "ALERT_ON":
        return {...state, isAlert:true, alertContent: action.alertContent, alertType: action.alertType}
        case "ALERT_OFF":
        return {...state, isAlert:false}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);

export default store;


