import React, {useState} from "react"

const ChannelIndexItem = ({element, clickFunction, isSubscriber}) => {
    const [visible, setVisible] = useState(false);
    
    const members = element.subscriberIds ? element.subscriberIds.length : -1;
    const buttonType = isSubscriber ? "Leave" : "Join";

    return (
        <li className="index-element" onMouseEnter={()=>setVisible(true)}
            data-id={element.id} onMouseLeave={()=>setVisible(false)}>
                <div className="index-element-data">
                    <h3># {element.name}</h3>
                    <p>
                        {isSubscriber && (<span className="subscribed">Joined</span>)}
                        <span>{members} {"member" + (members !== 1 ? "s" : "")}</span>
                        <span>{element.description}</span>
                    </p>
                </div>
                {visible && (<button className={buttonType.toLowerCase() + "-button"} onClick={clickFunction}>{buttonType}</button>)}  
        </li>
    )
}

export default ChannelIndexItem;