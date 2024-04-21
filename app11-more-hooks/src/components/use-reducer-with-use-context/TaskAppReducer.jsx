import { useReducer } from "react";
import Column from "../../shared-components/layout/Column";
import Row from "../../shared-components/layout/Row";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { tasksReducer } from "./reducers";
import { INIT_TASKS, NEXT_ID } from './utils';

const TaskAppReducer = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, INIT_TASKS);
    let nextId = NEXT_ID;
    const addTask = (task) => {
        dispatch({
            type: 'add',
            id: nextId++,
            task: task
        })
    }
    const changeTask = (task) => {
        dispatch({
            type: 'update',
            task: task
        })
    }
    const deleteTask = (taskId) => {
        dispatch({
            type: 'delete',
            id: taskId,
        });
    }

    return (
        <>
            <h1>CRUD with Use of useReducer and useContext Hook</h1>
            <Row>
                <Column>
                    <AddTask addTask={addTask} />
                </Column>
                <Column>
                    <TaskList tasks={tasks} onChangeTask={changeTask} onDeleteTask={deleteTask} />
                </Column>
            </Row>

        </>
    )
}

export default TaskAppReducer;