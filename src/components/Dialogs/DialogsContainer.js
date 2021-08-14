import { connect } from 'react-redux';
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
const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer