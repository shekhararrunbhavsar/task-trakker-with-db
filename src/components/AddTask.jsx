import { useState } from "react";

const AddTask = (props) => {
  const { addTask } = props;

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !day) {
      alert("Enter the details for new task");
      return;
    }

    addTask({ text, day, reminder }); //##

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)} //##
            placeholder="Add Task"
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="day"
            id="day"
            name="day"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control-check">
          <label>Reminder</label>
          <input
            type="checkbox"
            id="reminder"
            name="reminder"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input
          type="submit"
          value="Save Task"
          className="btn btn-block"
          // onClick={onSubmit}
        />
      </form>
    </div>
  );
};

export default AddTask;
