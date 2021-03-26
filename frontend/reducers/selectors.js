export const getFilteredChannels = ({entities: {channels}}, filter, value = true) => {
    let result = [];
    for (let id in channels) {
        if (channels[id][filter] === value)
            result.push(channels[id]);
    }
    return result;
}
export const getFilteredChannelsObject = (channels, filter, value = true) => {
    let result = {};
    for (let id in channels) {
        console.log(`${id}, ${channels[id][filter]}`)
        if (channels[id][filter] === value) {
            result[id] = channels[id];
        }
    }
    return result;
}

export const getCurrentUsersChannels = ({entities: {channels}, session: {currentUserId}}) => {
    let result = {};
    for (let id in channels) {
        if (channels[id].subscriberIds.includes(currentUserId))
            // Object.assign(result, { id: { channels[id] } });
            result[id] = channels[id];
        }
    return result;
}

export const getChannelsWithSubstring = ({entities: {channels}}, substr) => {
    return Object.values(channels).filter (channel => (
        !channel.private && (channel.name.includes(substr) || channel.description.includes(substr))
        )
    )
}