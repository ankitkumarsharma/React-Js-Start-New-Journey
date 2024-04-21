import { useState } from "react";
import Column from "../../../shared-components/layout/Column";
import Row from "../../../shared-components/layout/Row";
import { useTasksDispatch } from "./TaskContext";

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <Row>
                    <Column>
                        <input
                            value={task.task}
                            onChange={(e) => {
                                dispatch({
                                    type: 'update',
                                    task: {
                                        ...task,
                                        task: e.target.value,
                                    }
                                })
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
                    <button onClick={() =>
                        dispatch({
                            type: 'delete',
                            id: task.id,
                        })
                    }>Delete</button>
                </Column>
            </Row>


        </>
    )
}

export default Task;