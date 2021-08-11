import { connect } from 'react-redux';
import { setUsers, followUser, unfollowUser, setUsersTotalCount, setUsersCurrentPage, setLoadingGif } from '../../redux/users-reducer'
import * as axios from 'axios'
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { userApi } from '../Api/userApi'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoadingGif(true);
        userApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setLoadingGif(false);
                if (data.resultCode == 0) {
                    this.props.setUsers(data.result.items);
                    this.props.setUsersTotalCount(data.result.totalCount);
                }
            });
    }
    componentWillUnmount() {
        this.props.setUsers([]);
    }

    followUser = (userId) => {
        userApi.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    this.props.followUser(userId);
                }
            });
    }
    unfollowUser = (userId) => {
        userApi.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    this.props.unfollowUser(userId);
                }
            });
    }
    setCurrentPage = (page) => {
        this.props.setUsersCurrentPage(page);
        this.getUsers(page);
    }
    render() {
        return (
            <>
                {
                    this.props.isLoading ?
                        <Preloader /> :
                        <Users
                            totalPageCount={this.props.totalPageCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            unfollowUser={this.unfollowUser}
                            followUser={this.followUser}
                            setCurrentPage={this.setCurrentPage}
                            users={this.props.users} />
                }
            </>);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalPageCount: state.usersPage.totalPageCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setUsersTotalCount,
    setUsersCurrentPage,
    setLoadingGif
})(UsersContainer);