import { connect } from 'react-redux';
import { newMessageActionCreator, updateNewMessageTextActionCreater } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogsPage
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer