import Column from "../../../shared-components/layout/Column";
import Row from "../../../shared-components/layout/Row";
import Task from "./Task";
import { useTasks } from "./TaskContext";

const TaskList = () => {
    const tasks = useTasks();
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