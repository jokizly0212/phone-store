import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";

class Notifier extends Component {
    render() {
        return (
            <AlertContainer>
                <Alert type="info" onDismiss = {()=>this.onDismiss()} timeout = {1500}>
                    <b>Notification</b>
                    <span className="msg">{this.props.message}</span>             
                </Alert>
            </AlertContainer>
        );
    }

    onDismiss = () => {
        this.props.deleteNotifier();
    }
}

export default Notifier;