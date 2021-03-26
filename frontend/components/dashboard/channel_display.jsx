import React from "react";

class ChannelDisplay extends React.Component {
constructor (props) {
    super(props);
    // this.id = this.props.params["id"];

}

// ComponentDidMount () {
//     this.props.fetchChannel(this.id)
// }

render () {
    return (
        <div className = "displayItem">
            <p> Hello! </p>
        </div>
    )
}
}
export default ChannelDisplay;