import css from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            {props.users.map( u => 
                <div key={u.id}>
                    <div>
                        <img src={u.photoUrl} className={css.userPhoto}/>
                    </div>
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                    <div>
                        {u.followed ? 
                            <button onClick={() => props.unfollowUser(u.id)}>unfollow</button> : 
                            <button onClick={() => props.followUser(u.id)}>follow</button>}
                    </div>
                </div>
            )}
        </div>
    );
}
export default Users;