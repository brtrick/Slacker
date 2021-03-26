import React, {useState} from "react"

const ChannelIndexItem = ({element, clickFunction, isSubscriber}) => {
    const [visible, setVisible] = useState(false);
    
    const members = element.subscriberIds ? element.subscriberIds.length : -1;
    const buttonType = isSubscriber ? "Leave" : "Join";

    return (
        <li className="index-element" onMouseEnter={()=>setVisible(true)}
            onMouseLeave={()=>setVisible(false)}>
                <div className="index-element-data">
                    <h3># {element.name}</h3>
                    <p>
                    {isSubscriber && (<><span className="joined"><span className="material-icons">done</span>Joined</span><span className="dot">·</span></>)}
                        <span>{members} {"member" + (members !== 1 ? "s" : "")}</span>
                    <span>{(element.description !== "" ? (<><span className="dot">·</span><span>{element.description}</span></>) : "")}</span>
                    </p>
                </div>
            {visible && (<button className={"index-button " + buttonType.toLowerCase() + "-button"} data-id={element.id} onClick={clickFunction}>{buttonType}</button>)}
                {/* <button className={"index-button " + buttonType.toLowerCase() + "-button" + (visible ? "" : " hidden")} 
                    data-id={element.id} onClick={clickFunction}>{buttonType}</button> */}
        </li>
    )
}

export default ChannelIndexItem;