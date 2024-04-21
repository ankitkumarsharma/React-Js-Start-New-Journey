import { useContext, useState } from "react";
import { TaskDispatchContext } from "./TaskContext";
import { NEXT_ID } from "./utils";

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useContext(TaskDispatchContext);
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