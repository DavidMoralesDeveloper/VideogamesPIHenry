import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.contenerdor}>
      <Link to="/home">
        <button className={style.buttonCenter}> Let's Go </button>
      </Link>
    </div>
  );
};

export default Landing;
