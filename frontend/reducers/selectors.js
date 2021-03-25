export const getFilteredChannels = ({entities: {channels}}, filter, value = true) => {
    let result = [];
    for (let id in channels) {
        if (channels[id][filter] === value)
            result.push(channels[id]);
    }
    return result;
}

export const getChannelsWithSubstring = ({entities: {channels}}, substr) => {
    return Object.values(channels).filter (channel => (
        !channel.private && (channel.name.includes(substr) || channel.description.includes(substr))
        )
    )
}