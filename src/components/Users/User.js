import { NavLink } from 'react-router-dom';
import css from './Users.module.css';
import avatar from '../../www/images/avatar.png'

export const User = ({followingUsersId, unfollowUser, followUser, user}) => {
    return (
        <div key={user.id}>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photoUrl === '' ? avatar : user.photoUrl} className={css.userPhoto} />
                                </NavLink>
                            </div>
                            <div>{user.name}</div>
                            <div>{user.Status}</div>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                            <div>
                                {user.followed == 1 ?
                                    <button disabled={followingUsersId.some(id => id === user.id)} onClick={() => unfollowUser(user.id)}>unfollow</button> :
                                    <button disabled={followingUsersId.some(id => id === user.id)} onClick={() => followUser(user.id)}>follow</button>}
                            </div>
                        </div>
    );
}