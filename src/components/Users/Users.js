import css from './Users.module.css';
import * as axios from 'axios'
import React from 'react';

class Users extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.page);
    }

    getUsers = (page) => {
        debugger;  
        axios.get(`https://localhost:5001/users?page=${page}&count=${this.props.count}`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(response => {
            this.props.setUsers(response.data.result.items);
            this.props.setTotalCount(response.data.result.totalCount);
        });
    }

    //see a difference
    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.getUsers(page);
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.count);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span className={page === this.props.page ? css.currentPage : ''} onClick={() => this.setCurrentPage(page)}>{page}</span>
                    })}
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                            <div>
                                <img src={u.photoUrl === '' ? 'https://www.pngfind.com/pngs/m/292-2924858_user-icon-business-man-flat-png-transparent-png.png' : u.photoUrl}
                                    className={css.userPhoto} />
                            </div>
                            <div>{u.name}</div>
                            <div>{u.Status}</div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                            <div>
                                {u.followed == 1 ?
                                    <button onClick={() => this.props.unfollowUser(u.id)}>unfollow</button> :
                                    <button onClick={() => this.props.followUser(u.id)}>follow</button>}
                            </div>
                        </div>
                    )}
            </div>);
    }
}
export default Users;