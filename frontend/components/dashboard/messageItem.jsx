import React from "react"

const MessageItem = ({ message, author }) => {
    const name = author.displayName ? author.displayName : author.fullName;
    
    return (
        <li className="message index-element">
            <p>{name}</p>
            <p>{message.createdAt}</p>
            <p>{message.body}</p>
        </li> 
    )
}

export default MessageItem;