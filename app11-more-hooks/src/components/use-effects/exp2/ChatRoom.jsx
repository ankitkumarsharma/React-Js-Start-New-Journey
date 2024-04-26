import { useEffect } from "react";
import { createConnection } from "./chat";

const ChatRoom = ({ roomId, serverUrl }) => {
    useEffect(() => {
        const conn = createConnection(serverUrl, roomId);
        conn.connect();
        return () => {
            conn.disconnect();
        }
    }, [roomId]);
    return <h1>Welcome to the {roomId} room!</h1>;
}

export default ChatRoom;