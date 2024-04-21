import Place from "./Place";
import { places } from "./data";
import "./PostList.css";
const PostList = ({ imageSize, isLarge }) => {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place
                isLarge={isLarge}
                place={place}
                imageSize={imageSize}
            />
        </li>
    );
    return <ul>{listItems}</ul>;
}

export default PostList;
