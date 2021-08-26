import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { newMessageActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(newMessageActionCreator(newMessageText))
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);