import { connect } from 'react-redux';
import { setUsersActionCreater, followUserActionCreater, unfollowUserActionCreater } from '../../redux/users-reducer'
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserActionCreater(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserActionCreater(userId))
        },
        setState: (users) => {
            dispatch(setUsersActionCreater(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer