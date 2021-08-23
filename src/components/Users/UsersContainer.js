import { connect } from 'react-redux';
import { followUser, unfollowUser, setFollowingProcess, getUsers, setUsers } from '../../redux/users-reducer'
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { getUsersSelector, getCurrentPageSelector, 
         getFollowingUsersId, getIsLoadingSelector, 
         getPageSizeSelector, getTotalPageCountSelector } from '../../redux/users-selector'

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
        users: getUsersSelector(state),
        currentPage: getCurrentPageSelector(state),
        totalPageCount: getTotalPageCountSelector(state),
        pageSize: getPageSizeSelector(state),
        isLoading: getIsLoadingSelector(state),
        followingUsersId: getFollowingUsersId(state)
    }
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setFollowingProcess,
    getUsers,
    setUsers
})(UsersContainer);