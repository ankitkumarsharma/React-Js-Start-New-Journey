import Button from "./Button";
import SlideContent from "./SlideContent";

const SliderContainer = ({ prevInactive, nextInactive, nextCount, prevCount, count, data }) => {
    return (
        <div className="flex m-20">
            <div className="flex-1">
                <Button inactive={prevInactive} onClick={prevCount}>
                    Prev
                </Button>
            </div>
            <div className="flex-1 text-center">
                <SlideContent
                    count={count}
                    data={data}
                />
            </div>
            <div className="flex-1 text-right">
                <Button inactive={nextInactive} onClick={nextCount}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default SliderContainer;