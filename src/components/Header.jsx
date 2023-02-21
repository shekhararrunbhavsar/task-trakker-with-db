import Button from "./Button";
// import { useLocation } from "react-router-dom";

export default function Header(props) {
  const { title, showAddTask, toggleShowAddTask } = props;

  // const onclick = () => {
  //   console.log("clicked");
  // };
  return (
    <div className="header">
      <h2>{title}</h2>
      <Button
        color={showAddTask ? "FireBrick" : "#009999"}
        text={showAddTask ? "Close" : "Add"}
        toggleShowAddTask={toggleShowAddTask}
      />
      {/* <Button /> */}
    </div>
  );
}
