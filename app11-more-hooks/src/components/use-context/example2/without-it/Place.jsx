import Column from "../../../../shared-components/layout/Column";
import Row from "../../../../shared-components/layout/Row";
import PlaceImage from "./PlaceImage";

const Place = ({ place, imageSize, isLarge }) => {
    return (
        <>
            <Row>
                <Column className={isLarge ? 'col-5' : 'col-3'}>
                    <PlaceImage
                        place={place}
                        imageSize={imageSize}
                    />
                </Column>
                <Column className={isLarge ? 'col-7' : 'col-9'}>
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