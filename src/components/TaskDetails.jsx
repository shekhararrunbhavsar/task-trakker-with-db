import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  // const [error, setError] = useState(null);

  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        return navigate("/");
      }

      setTask(data);
      setLoading(false);
    };
    fetchTask();
  }, [params.id]);

  // if (error) {
  //   return <Navigate to="/" />;
  // }

  return loading ? (
    <h3>Loading..</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default TaskDetails;
