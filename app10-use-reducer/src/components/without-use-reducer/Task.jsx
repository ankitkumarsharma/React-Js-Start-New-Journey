import { useState } from "react";
import Row from "../../shared-components/layout/Row";
import Column from "../../shared-components/layout/Column";

const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <Row>
                    <Column>
                        <input
                            value={task.text}
                            onChange={(e) => {
                                onChange({
                                    ...task,
                                    text: e.target.value,
                                });
                            }}
                        />
                    </Column>
                    <Column>
                        <button onClick={() => setIsEditing(false)}>Save</button>
                    </Column>
                </Row>

            </>
        )
    } else {
        taskContent = (
            <>
                <Row>
                    <Column>
                        {task.text}
                    </Column>
                    <Column>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </Column>
                </Row>


            </>
        )
    }
    return (
        <>
            <Row>
                <Column>
                    {taskContent}
                </Column>
                <Column>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </Column>
            </Row>


        </>
    )
}

export default Task;