
const Button = ({children,onClick}) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
}

const PlayButton = ({movieName})=>{
    const handlePlayClick = ()=>{
        alert(`Playing ${movieName}`);
    }
    return(
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

const UploadButton = ()=>{
    return(
        <Button onClick={()=> alert("Uploading...")}>
            Upload Image
        </Button>
    );
}

const EventExp2 = () => {
    return (
         <div>
            <PlayButton movieName="Indian" />
            <UploadButton/>
            <Button onClick={()=> alert('Hello Motto...')}>Hello Motto</Button>
         </div>
    );
}

export default EventExp2;