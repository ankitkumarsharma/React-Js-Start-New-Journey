import { useEffect, useState } from "react";
import { createConnection } from "./chat";
import ChatRoom from "./ChatRoom";

const UseEffectExp2 = () => {
    const serverUrl = 'https://localhost:1234';
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return <>
        <label>
            Choose the chat room:{' '}
            <select disabled={show}
                value={roomId}
                onChange={e => setRoomId(e.target.value)}
            >
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
        </label>
        <button onClick={() => setShow(!show)}>
            {show ? 'Close chat' : 'Open chat'}
        </button>
        {show && <hr />}
        {show && <ChatRoom serverUrl={serverUrl} roomId={roomId} />}
    </>
}

export default UseEffectExp2;