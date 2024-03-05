
const Button = ({name,onClick}) => {
    return (
        <button onClick={onClick}>{name}</button>
    );
}

const Toolbar = ({ onPlayMovie, onUploadImage }) => {
    return (
        <>
            <Button name="Play Movie" onClick={onPlayMovie} />
            <Button name="Upload Image" onClick={onUploadImage}/>
        </>
    );
}

const EventExp1 = () => {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!!!')}
            onUploadImage={() => alert('Uploading...')}
        />
    );
}

export default EventExp1;