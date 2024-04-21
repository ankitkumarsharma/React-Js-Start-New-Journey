import { useContext } from "react";
import { getImageUrl } from "./utils";
import { ImageContext } from "./ImageContext";

const PlaceImage = ({ place }) => {
    const imageContext = useContext(ImageContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageContext.imageSize}
            height={imageContext.imageSize}
        />
    );
}

export default PlaceImage;