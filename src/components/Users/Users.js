import React from 'react';
import { Paginator } from '../Common/Utils/Paginator';
import { User } from './User';

let Users = React.memo(({totalPageCount, currentPage, users, followingUsersId, unfollowUser, followUser, setCurrentPage, pageSize}) => {
    return (
        <div>
            <Paginator totalPageCount={totalPageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} pageSize={pageSize}/>
            {
                users.map(u =>
                    <User user={u} followingUsersId={followingUsersId} unfollowUser={unfollowUser} followUser={followUser}/>
                )}
        </div>);
});

export default Users;   