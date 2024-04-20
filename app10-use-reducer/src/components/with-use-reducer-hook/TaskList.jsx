import Column from "../../shared-components/layout/Column";
import Row from "../../shared-components/layout/Row";
import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <>
            <ul>
                {tasks.map(task => (
                    <Row key={task.id}>
                        <Column>
                            <Task task={task}
                                onChange={onChangeTask}
                                onDelete={onDeleteTask}
                            />
                        </Column>
                    </Row>
                ))}
            </ul>
        </>
    )
}

export default TaskList;