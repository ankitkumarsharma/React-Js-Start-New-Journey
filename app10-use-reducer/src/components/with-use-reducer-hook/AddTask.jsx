import { useState } from "react";

const AddTask = ({addTask}) => {
    const [task, setTask] = useState('');
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
          addTask(task);
        }}>
        Add
      </button>
    </>
  );
}

export default AddTask;