import React from 'react';
import { Paginator } from '../Common/Utils/Paginator';
import { User } from './User';

let Users = React.memo(({totalPageCount, currentPage, users, followingUsersId, unfollowUser, followUser, setCurrentPage, pageSize, paginatorPartSize}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalPageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} pageSize={pageSize} paginatorPartSize={paginatorPartSize}/>
            {
                users.map(u =>
                    <User key={u.id} user={u} followingUsersId={followingUsersId} unfollowUser={unfollowUser} followUser={followUser}/>
                )}
        </div>);
});

export default Users;   