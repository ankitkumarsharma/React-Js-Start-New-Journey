import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const UseEffectExp1 = () => {
    //     To write an Effect, follow these three steps:
    // 1. Declare an Effect. By default, your Effect will run after every render.
    // 2. Specify the Effect dependencies. Most Effects should only re-run when needed rather than after every render. For example, a fade-in animation should only trigger when a component appears. Connecting and disconnecting to a chat room should only happen when the component appears and disappears, or when the chat room changes. You will learn how to control this by specifying dependencies.
    // 3. Add cleanup if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing. For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”. You will learn how to do this by returning a cleanup function.
    // Let’s look at each of these steps in detail.

    // You can tell React to skip unnecessarily re-running the Effect by specifying an array of dependencies as the second argument to the useEffect call. Start by adding an empty [] array to the above example on line 14:
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={()=> setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause':'Play'}
            </button>
            <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
        </>
    );
}

export default UseEffectExp1;