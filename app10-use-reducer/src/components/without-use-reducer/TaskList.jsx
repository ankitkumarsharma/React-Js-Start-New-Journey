import { useState } from "react";
import initialTasks from './utils';
import nextId from './utils';
import Task from "./Task";
import Row from "../../shared-components/layout/Row";
import Column from "../../shared-components/layout/Column";

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