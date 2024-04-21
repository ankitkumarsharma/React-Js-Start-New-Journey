import Place from "./Place";
import { places } from "./data";
import "./PostList.css";
const PostList = () => {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place
                place={place}
            />
        </li>
    );
    return <ul>{listItems}</ul>;
}

export default PostList;
