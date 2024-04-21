import { useContext } from "react";
import Column from "../../shared-components/layout/Column";
import Row from "../../shared-components/layout/Row";
import Task from "./Task";
import { TaskContext } from "./TaskContext";

const TaskList = () => {
    const tasks = useContext(TaskContext);
    return (
        <>
            <ul>
                {tasks.map(task => (
                    <Row key={task.id}>
                        <Column>
                            <Task task={task} />
                        </Column>
                    </Row>
                ))}
            </ul>
        </>
    )
}

export default TaskList;