import { useState } from "react";
import PostList from "./PostList";
import Row from "../../../../shared-components/layout/Row";
import Column from "../../../../shared-components/layout/Column";

const PostApp1 = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <>
            <Row>
                <Column className="col-6">
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
                    <PostList isLarge={isLarge} imageSize={imageSize} />
                </Column>
            </Row>

        </>
    )
}

export default PostApp1;