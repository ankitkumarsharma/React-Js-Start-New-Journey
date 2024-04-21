export const getImageUrl = (place) => {
    return (
        'https://i.imgur.com/' +
        place.imageId +
        'l.jpg'
    );
}

export const getImageContextObj = {
    imageSize: 100,
    isLarge: false
}