import { useState } from "react";
import { useTasksDispatch } from "./TaskContext";
import { NEXT_ID } from "./utils";

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useTasksDispatch();
  let nextId = NEXT_ID;
  return (
    <>
      <input
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTask('');
          dispatch({
            type: 'add',
            id: nextId++,
            task: task,
          })
        }}>
        Add
      </button>
    </>
  );
}

export default AddTask;