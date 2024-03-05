const SlideContent = ({ count, data }) => {
    let slide = data[count];
    if (slide) {
        return (
            <div>
                <p className="font-bold">
                    {count + 1} of {data.length}
                </p>
                <h1 className="text-2xl text-center font-bold">
                    {slide.title}
                </h1>
                <img alt={slide.title} src={slide.url} />
            </div>
        );
    } else {
        return 'Thanks for watch!!!';
    }

}

export default SlideContent;