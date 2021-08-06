import css from './Users.module.css';
import React from 'react';
import avatar from '../../www/images/avatar.png'

let Users = (props) => {
    let pageCount = Math.ceil(props.totalPageCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={page === props.currentPage ? css.currentPage : ''} onClick={() => props.setCurrentPage(page)}>{page}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <img src={u.photoUrl === '' ? avatar : u.photoUrl}
                                className={css.userPhoto} />
                        </div>
                        <div>{u.name}</div>
                        <div>{u.Status}</div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                        <div>
                            {u.followed == 1 ?
                                <button onClick={() => props.unfollowUser(u.id)}>unfollow</button> :
                                <button onClick={() => props.followUser(u.id)}>follow</button>}
                        </div>
                    </div>
                )}
        </div>);
}

export default Users;