export const fetchWorkspace = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/workspaces/${id}`
    })
}

export const fetchWorkspaces = (user_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/workspaces/`,
        data: {user_id: user_id}
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