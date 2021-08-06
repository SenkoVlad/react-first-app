import { connect } from 'react-redux';
import { setUsersActionCreater, followUserActionCreater, unfollowUserActionCreater, setUsersTotalCountActionCreater, setUsersCurrentPageActionCreater } from '../../redux/users-reducer'
import * as axios from 'axios'
import React from 'react';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.page);
    }
    getUsers = (page) => {
        axios.get(`https://localhost:5001/users?page=${page}&count=${this.props.count}`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(response => {
            this.props.setUsers(response.data.result.items);
            this.props.setTotalCount(response.data.result.totalCount);
        });
    }
    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.getUsers(page);
    }
    render() {
        return <Users
            totalCount={this.props.totalCount}
            count={this.props.count}
            page={this.props.page}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser} 
            setCurrentPage={this.setCurrentPage}
            users={this.props.users}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        totalCount: state.usersPage.totalCount,
        count: state.usersPage.count
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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);