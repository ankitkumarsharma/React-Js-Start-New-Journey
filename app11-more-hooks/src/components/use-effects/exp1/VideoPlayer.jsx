import { useEffect, useRef } from "react";

const VideoPlayer = ({src, isPlaying})=>{
    const ref = useRef(null);
    useEffect(()=>{
        if(isPlaying){
            console.log("play...")
            ref.current.play();
        }else{
            console.log("pause...")
            ref.current.pause();
        }
    });
    // useEffect(()=>{
    //     if(isPlaying){
    //         console.log("play...")
    //         ref.current.play();
    //     }else{
    //         console.log("pause...")
    //         ref.current.pause();
    //     }
    // },[isPlaying]);
    // useEffect(()=>{...},[]); use blank array as 2nd argument for skip unnecessarily re-running the Effect


    // useEffect(() => {
    //     // This runs after every render
    //   });
      
    //   useEffect(() => {
    //     // This runs only on mount (when the component appears)
    //   }, []);
      
    //   useEffect(() => {
    //     // This runs on mount *and also* if either a or b have changed since the last render
    //   }, [a, b]);

    
    return <video ref={ref} src={src} loop playsInline></video>
}

export default VideoPlayer;