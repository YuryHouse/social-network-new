import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

let Users = ({
                 currentPage,
                 onPageChanged,
                 totalUsersCount,
                 pageSize,
                 selectedPage,
                 users,
                 follow,
                 unfollow,
                 followingInProgress,
             }) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       selectedPage={selectedPage}
            />
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     follow={follow}
                                     unfollow={unfollow}
                                     followingInProgress={followingInProgress}/>
                )
            }
        </div>
    )
}

export default Users;