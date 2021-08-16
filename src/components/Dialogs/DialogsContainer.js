import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { newMessageActionCreator, updateNewMessageTextActionCreater } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogsPage,
        newMessageText : state.dialogsPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(newMessageActionCreator())
        },
        updateMessageText: (newMessageText) => {
            dispatch(updateNewMessageTextActionCreater(newMessageText));
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);