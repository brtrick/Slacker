export const fetchChannel = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/channels/${id}`
    })
}

export const fetchWorkspaceChannels = (workspace_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/workspaces/${workspace_id}/channels/`
    })
}

export const createChannel = channel => (
    $.ajax({
        method: 'POST',
        url: 'api/channels',
        data: { channel }
    })
);