import { useContext } from "react";
import Column from "../../../../shared-components/layout/Column";
import Row from "../../../../shared-components/layout/Row";
import PlaceImage from "./PlaceImage";
import { ImageContext } from "./ImageContext";

const Place = ({ place }) => {
    const imageContext = useContext(ImageContext);
    return (
        <>
            <Row>
                <Column className={imageContext.isLarge ? 'col-5' : 'col-3'}>
                    <PlaceImage
                        place={place}
                    />
                </Column>
                <Column className={imageContext.isLarge ? 'col-7' : 'col-9'}>
                    <p>
                        <b>{place.name}</b>
                        {': ' + place.description}
                    </p>
                </Column>
            </Row>
        </>
    );
}

export default Place;