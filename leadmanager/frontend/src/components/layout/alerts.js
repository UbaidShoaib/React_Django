import React, {Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import {connect} from 'react-redux';
import PropeTypes from 'prop-types';

export class Alerts extends Component {
    static proptypes = {
        error: PropeTypes.object.isRequired,
        message:PropeTypes.object.isRequired
    }
    componentDidUpdate  (prevProps) {
        const {error, alert, message} = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
        }
        if ( message !== prevProps.message){
            if(message.deleteLead) alert.success(message.deleteLead);
            if(message.addLead) alert.success(message.addLead);

        }
    }
    render() {
        return( <Fragment />);
    }
}
 const mapStateToProp = state =>({
     error:state.errors,
     message:state.messages
 });
export default connect(mapStateToProp)(withAlert()(Alerts));