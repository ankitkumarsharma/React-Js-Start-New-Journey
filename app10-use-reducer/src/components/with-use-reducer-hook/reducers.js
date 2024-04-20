export const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case 'add': {
            return [...tasks, {
                id: action.id,
                task: action.task,
                done: false
            }]
        }
        case 'update': {
            return tasks.map((t) => (
                t.id === action.task.id ? action.task : t
            ))
        }
        case 'delete': {
            return tasks.filter((t) => t.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}