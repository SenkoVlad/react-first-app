import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { sendMessage, getDialogs, chooseCurrentDialog } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

class DialogsContainer extends React.PureComponent {
    componentDidMount() {
        this.props.getDialogs(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <Dialogs dialogs={this.props.dialogs} 
                     userId={this.props.userId}
                     messages={this.props.messages}
                     pageSize={this.props.pageSize} 
                     currentPage={this.props.currentPage}
                     messagesPageSize={this.props.messagesPageSize}
                     currentMessagePage={this.props.currentMessagePage}
                     chooseCurrentDialog={this.props.chooseCurrentDialog}
                     sendMessage={this.props.sendMessage}
                     currentUserDialogId={this.props.currentUserDialogId}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        pageSize: state.dialogsPage.pageSize,
        dialogs: state.dialogsPage.dialogs,
        currentMessagePage: state.dialogsPage.currentMessagePage,
        messagesPageSize: state.dialogsPage.messagesPageSize,
        currentUserDialogId: state.dialogsPage.currentUserDialogId,
        pageSize: state.dialogsPage.pageSize,
        currentPage: state.dialogsPage.currentPage,
        userId: state.auth.userId
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        sendMessage,
        getDialogs,
        chooseCurrentDialog
    })
)(DialogsContainer);