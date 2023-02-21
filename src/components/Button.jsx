export default function Button(props) {
  const { text, color, toggleShowAddTask } = props;
  // console.log(text);
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={toggleShowAddTask}
      >
        {text}
      </button>
    </div>
  );
}
