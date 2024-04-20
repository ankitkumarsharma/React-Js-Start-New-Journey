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
                            value={task.task}
                            onChange={(e) => {
                                onChange({
                                    ...task,
                                    task: e.target.value,
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
                        {task.task}
                    </Column>
                    <Column className="col-2">
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
                <Column className="col-2 mt-3">
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </Column>
            </Row>


        </>
    )
}

export default Task;