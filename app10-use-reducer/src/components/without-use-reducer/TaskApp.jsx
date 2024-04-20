import { useState } from "react";
import { INIT_TASKS, NEXT_ID } from './utils';
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Row from "../../shared-components/layout/Row";
import Column from "../../shared-components/layout/Column";

const TaskApp = ()=>{
    const [tasks, setTasks] = useState(INIT_TASKS);
    let nextId = NEXT_ID;
    const addTask = (task) => {
        setTasks([...tasks, {
            id: nextId++,
            text: task,
            done: false
        }]);
    }
    const changeTask = (task)=>{
        setTasks(
            tasks.map((t)=>(
                t.id === task.id? task : t
            ))
        )
    }
    const deleteTask = (taskId)=> {
        setTasks(tasks.filter((t)=> t.id !== taskId));
    }

    return(
        <>  
            <h1>CRUD with Use of useState Hook</h1>
            <Row>
                <Column>
                    <AddTask addTask={addTask}/>
                </Column>
                <Column>
                    <TaskList tasks={tasks} onChangeTask={changeTask} onDeleteTask={deleteTask}/>
                </Column>
            </Row>
            
        </>
    )
}

export default TaskApp;