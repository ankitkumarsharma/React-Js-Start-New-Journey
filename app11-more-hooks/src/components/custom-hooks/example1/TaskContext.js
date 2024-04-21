import { createContext, useContext, useReducer } from "react";
import { tasksReducer } from "./reducers";
import { INIT_TASKS } from "./utils";

const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, INIT_TASKS)
    return (
        <TaskContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export default TaskProvider;

export const useTasks = () => {
    return useContext(TaskContext);
}

export const useTasksDispatch = () => {
    return useContext(TaskDispatchContext);
}