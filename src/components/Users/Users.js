import css from './Users.module.css';
import * as axios from 'axios'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://localhost:5001/users", {
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(response => {
            props.setUsers(response.data.data);
        });
    }
    var users1 = props.users.map(u => {
        return {
            id : u.id,
            photoUrl : u.photoUrl,
            name : u.name,
            status : u.status
        }
    });
    debugger;

    return (
        // <div>
        //     {users1.forEach(u => {
        //       <div key={u.id}>
        //       <div>
        //           <img src={u.photoUrl} className={css.userPhoto} />
        //       </div>
        //       <div>{u.name}</div>
        //       <div>{u.Status}</div>
        //       {/* <div>{u.location.city}</div>
        //           <div>{u.location.country}</div> */}
        //       <div>
        //           {u.followed == 1 ?
        //               <button onClick={() => props.unfollowUser(u.id)}>unfollow</button> :
        //               <button onClick={() => props.followUser(u.id)}>follow</button>}
        //       </div>
        //   </div>  
        //     })}
        // </div>

        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <img src={u.photoUrl} className={css.userPhoto} />
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
        </div>
    );
}


export default Users;