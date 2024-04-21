import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskProvider from "./TaskProvider";
const TaskAppReducer = () => {
    return (
        <TaskProvider>
            <h1>CRUD with Use of useReducer and useContext Hook</h1>
            <AddTask />
            <TaskList />
        </TaskProvider>
    )
}

export default TaskAppReducer;