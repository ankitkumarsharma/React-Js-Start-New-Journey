import { useReducer } from "react";
import { tasksReducer } from "./reducers";
import { INIT_TASKS } from "./utils";
import { TaskContext, TaskDispatchContext } from "./TaskContext";

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