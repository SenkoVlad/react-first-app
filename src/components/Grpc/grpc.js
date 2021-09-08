import React from "react";
import { chat } from "../../Api/chatroom_client";

class Grpc extends React.PureComponent {
    componentDidMount() {
        const a = chat();
    }

    render() {
        return (
            <div>
                Grpc
            </div>
        )
    }
}
export default Grpc;