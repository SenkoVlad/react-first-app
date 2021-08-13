import { connect } from 'react-redux';
import {  followUser, unfollowUser, setFollowingProcess, getUsers, setUsers } from '../../redux/users-reducer'
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    componentWillUnmount() {
        this.props.setUsers([]);
    }
    setCurrentPage = (page) => {
        this.props.getUsers(page, this.props.pageSize, true);
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
                            unfollowUser={this.props.unfollowUser}
                            followUser={this.props.followUser}
                            setCurrentPage={this.setCurrentPage}
                            users={this.props.users}
                            followingUsersId={this.props.followingUsersId} />
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
        isLoading: state.usersPage.isLoading,
        followingUsersId: state.usersPage.followingUsersId
    }
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setFollowingProcess,
    getUsers,
    setUsers
})(UsersContainer);