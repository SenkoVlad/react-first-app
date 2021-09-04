import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { sendMessage, getDialogs } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs(this.props.currentPage, this.props.pageSize);
    }

    getCurrentUserId() {
        return this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
    }

    render() {
        return (
            <Dialogs dialogs={this.props.dialogs} 
                     messages={this.props.messages}
                     totalCount={this.props.totalCount} 
                     sendMessage={this.props.sendMessage}
                     pageSize={this.props.pageSize}
                     totalCount={this.props.totalCount}
                     currentPage={this.props.currentPage}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        totalCount: state.dialogsPage.totalPageCount,
        dialogs: state.dialogsPage.dialogs,
        currentUserDialogId: state.dialogsPage.currentUserDialogId,
        pageSize: state.dialogsPage.pageSize,
        currentPage: state.dialogsPage.currentPage,
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        sendMessage,
        getDialogs
    })
)(DialogsContainer);