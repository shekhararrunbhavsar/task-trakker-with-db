import Task from "./Task";

export default function Tasks(props) {
  const { tasks, deleteTask, toggleReminder } = props;

  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </div>
  );
}
