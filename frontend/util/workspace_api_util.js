export const fetchWorkspace = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/workspaces/${id}`
    })
}

export const fetchUserWorkspace = (userId, wsId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/workspaces/${wsId}`
    })
}

export const fetchUserWorkspaces = (user_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${user_id}/workspaces/`
    })
}

export const createWorkspace = workspace => (
    $.ajax({
        method: 'POST',
        url: 'api/workspaces',
        data: { workspace }
    })
);

// export const login = (user) => {
//     return $.ajax({
//         method: 'POST',
//         url: '/api/session',
//         data: { user }
//     })
// }

// export const logout = () => {
//     return $.ajax({
//         method: 'DELETE',
//         url: '/api/session'
//     })
// }