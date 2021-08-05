import { connect } from 'react-redux';
import { setUsersActionCreater, followUserActionCreater, unfollowUserActionCreater, setUsersTotalCountActionCreater, setUsersCurrentPageActionCreater } from '../../redux/users-reducer'
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page : state.usersPage.page,
        totalCount : state.usersPage.totalCount,
        count : state.usersPage.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserActionCreater(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserActionCreater(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users));
        },
        setTotalCount: (count) => {
            dispatch(setUsersTotalCountActionCreater(count));
        },
        setCurrentPage: (page) => {
            dispatch(setUsersCurrentPageActionCreater(page));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer