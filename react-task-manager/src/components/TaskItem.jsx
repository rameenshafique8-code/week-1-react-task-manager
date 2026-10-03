function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button
        type="button"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;