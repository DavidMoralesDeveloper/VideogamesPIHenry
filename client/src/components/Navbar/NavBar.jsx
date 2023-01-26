import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home"> <button className={style.buttonNavBar}>HOME</button> </Link>
      
      <Link to="/create"><button className={style.buttonNavBar}>Add A New Game</button></Link>
    </div>
  );
};

export default NavBar;
