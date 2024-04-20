import { useState } from "react";

const AddTask = ({onAddTask}) => {
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
          onAddTask(task);
        }}>
        Add
      </button>
    </>
  );
}

export default AddTask;