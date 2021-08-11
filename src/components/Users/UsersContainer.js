import { connect } from 'react-redux';
import { setUsers, followUser, unfollowUser, setUsersTotalCount, setUsersCurrentPage, setLoadingGif } from '../../redux/users-reducer'
import * as axios from 'axios'
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }
    componentWillUnmount() {
        this.props.setUsers([]);
    }
    getUsers = (page) => {
        this.props.setLoadingGif(true);
        axios.get(`https://localhost:5001/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setLoadingGif(false);
                if(response.data.resultCode == 0) {
                    this.props.setUsers(response.data.result.items);
                    this.props.setUsersTotalCount(response.data.result.totalCount);                    
                }
            });
    }
    followUser = (userId) => {
        axios.post(`https://localhost:5001/users/follow/${userId}`, {}, {
            withCredentials : true
        })
        .then(response => {
            if(response.data.resultCode == 0) {
                this.props.followUser(userId);
            }
        });
    }
    unfollowUser = (userId) => {
        axios.post(`https://localhost:5001/users/unfollow/${userId}`, {}, {
            withCredentials : true
        })
        .then(response => {
            if(response.data.resultCode == 0) {
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