import React from "react"

const ChannelListItem = ({channel, clickFunction, selected, dm, users, currentUserId}) => {
    let name = "";
    if (dm) {
        let subscribers = channel.subscriberIds.filter(id => id !== currentUserId);
        
        name = subscribers.map( (id) => {
            return (users[id].displayName ? users[id].displayName : users[id].fullName);
        }).join("+");
    }
    
    return (
        <li className={"channel-list-item" + 
                        (selected === channel.id ? " selected" : "")} 
            onClick={clickFunction}
            data-id={channel.id}>
            {dm ? (
                <p><span className="material-icons">account_box</span>{name}</p>
            ) : (
                <p><span>#</span> {channel.name}</p>
            )}
        </li>
    )

}

export default ChannelListItem;