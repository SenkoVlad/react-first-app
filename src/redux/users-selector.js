export const getUsersSelector = (state) => {
    return state.usersPage.users;
}
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}
export const getTotalPageCountSelector = (state) => {
    return state.usersPage.totalPageCount;
}
export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}
export const getIsLoadingSelector = (state) => {
    return state.usersPage.isLoading;
}
export const getFollowingUsersId = (state) => {
    return state.usersPage.followingUsersId;
}
