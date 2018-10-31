import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifier from './../components/Notifier';
import { actionDeleteNotifier } from './../actions/index';


class NotifierContainer extends Component {
    render() {
        return (
            <div>
                {this.displayNotitfier()}
            </div>
        );
    }

    displayNotitfier = () => {
        var {isDisplayNotifier, message, deleteNotifier} = this.props;
        var result = null;
        if(isDisplayNotifier) {
            result = <Notifier 
                        message = {message}
                        deleteNotifier = {deleteNotifier}
                    />
        }
        return result;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayNotifier: state.notifier.isDisplayNotifier,
        message: state.message
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteNotifier: () => {
            dispatch(actionDeleteNotifier())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NotifierContainer)