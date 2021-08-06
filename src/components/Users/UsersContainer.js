import { connect } from 'react-redux';
import { setUsersActionCreater, followUserActionCreater, unfollowUserActionCreater, setUsersTotalCountActionCreater, setUsersCurrentPageActionCreater, setLoadingGifActionCreater } from '../../redux/users-reducer'
import * as axios from 'axios'
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }
    getUsers = (page) => {
        this.props.setLoadingGif(true);
        axios.get(`https://localhost:5001/users?page=${page}&count=${this.props.pageSize}`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(response => {
            this.props.setLoadingGif(false);
            this.props.setUsers(response.data.result.items);
            this.props.setTotalCount(response.data.result.totalCount);
        });
    }
    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.getUsers(page);
    }
    render() {        
        return( 
        <>
            {this.props.isLoading ? <Preloader/> : <></> } 
            <Users
                totalPageCount={this.props.totalPageCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unfollowUser={this.props.unfollowUser}
                followUser={this.props.followUser} 
                setCurrentPage={this.setCurrentPage}
                users={this.props.users}/>
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
        },
        setLoadingGif: (flag) => {
            dispatch(setLoadingGifActionCreater(flag));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);