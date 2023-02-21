import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="footer" style={{ textAlign: "center", marginTop: "100px" }}>
      <h6>Trask Tracker using ReactJS by</h6> <h5>shekhar&copy;2023 </h5>
      <Link to="/about">About</Link>
    </div>
  );
}
