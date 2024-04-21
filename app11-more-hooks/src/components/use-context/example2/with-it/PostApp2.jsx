import { useState } from "react";
import PostList from "./PostList";
import Row from "../../../../shared-components/layout/Row";
import Column from "../../../../shared-components/layout/Column";
import { ImageContext } from "./ImageContext";

const PostApp2 = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    const imageContext = {
        imageSize: imageSize,
        isLarge: isLarge
    }
    return (
        <>
            <Row>
                <Column className="col-6">
                    <ImageContext.Provider value={imageContext}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isLarge}
                                onChange={e => {
                                    setIsLarge(e.target.checked);
                                }}
                            />
                            Use large images
                        </label>
                        <hr />
                        <PostList />
                    </ImageContext.Provider>
                </Column>
            </Row>

        </>
    )
}

export default PostApp2;