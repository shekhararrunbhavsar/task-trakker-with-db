import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Task(props) {
  const { task, deleteTask, toggleReminder } = props;
  return (
    <div
      // style={{
      //   background: "#f8f9f9",
      //   margin: "5px",
      //   padding: "10px 20px",
      //   cursor: "pointer",
      // }}
      className={`task ${task.reminder ? "remindergreen" : "reminderred"}`} //##
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h6>
        {task.text}
        <FaTimes
          onClick={() => deleteTask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h6>
      <p>{task.day}</p>
      <p>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p>
    </div>
  );
}
