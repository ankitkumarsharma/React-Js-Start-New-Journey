import AddTask from "./AddTask";
import TaskProvider from "./TaskContext";
import TaskList from "./TaskList";

const TaskAppCustomHookExp1 = () => {
    return (
        <TaskProvider>
            <h1>CRUD with Use of useReducer, useContext along with Custom Hooks</h1>
            <AddTask />
            <TaskList />
        </TaskProvider>
    )
}

export default TaskAppCustomHookExp1;