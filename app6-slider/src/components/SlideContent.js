const SlideContent = ({ count, data }) => {
    let slide = data[count];
    if (slide) {
        return (
            <div className="text-center">
                <p className="font-bold pb-4">
                    {count + 1} of {data.length}
                </p>
                <h4 className="text-center font-bold h-16">
                    {slide.title}
                </h4>
                <img alt={slide.title} src={slide.url} />
            </div>
        );
    } else {
        return 'Thanks for watch!!!';
    }

}

export default SlideContent;