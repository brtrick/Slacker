import React from "react";

export default ({workspace, clickFunction}) => {
    return (
        <li className="workspaceListItem">
            <p>{workspace.name}</p>
            <button className="index-button"
                    onClick={clickFunction} 
                    data-id={workspace.id}>
                    Open
            </button>
        </li>
    )
}
