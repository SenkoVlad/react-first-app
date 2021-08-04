import css from './Users.module.css';
import * as axios from 'axios'
import React from 'react';

class Users extends React.Component {

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        debugger;
        axios.get(`https://localhost:5001/users?page=${this.props.page}&count=${this.props.count}`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(response => {
            this.props.setUsers(response.data.result.items);
        });
    }

    render() {
        return (
            <div>
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