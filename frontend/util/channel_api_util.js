export const fetchChannel = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/channels/${id}`
    })
}

export const fetchChannels = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/channels/`
    })
}

export const createChannel = channel => (
    $.ajax({
        method: 'POST',
        url: 'api/channels',
        data: { channel }
    })
);