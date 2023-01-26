import style from'./SerchBar.module.css'

const SerchBar = () => {
  return (
    <div>
      <input 
      className={style.inputSearch} 
      placeholder="Search a Video Game" 
      type="search" />

      <button className={style.buttonNavSearch}> SEARCH </button>
    </div>
  );
};

export default SerchBar;
