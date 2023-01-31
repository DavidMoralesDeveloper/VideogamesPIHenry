import { useState } from 'react';
import { searchByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import style from'./SerchBar.module.css'

const SerchBar = () => {
  
const dispatch = useDispatch()

const [name, setName] = useState('')

const handleInputChange = (event) => {
  setName(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault();
  if (!name) { alert('You must enter a name') }
  else {
    dispatch(searchByName(name));
    setName('');
  }
}



  return (
    <div>
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className={style.searchBar}>
        <input 
        type='text' 
        id='search'
        value={name} 
        placeholder="Search videogame..." 
        autoComplete='off' 
        onChange={(event) => handleInputChange(event)} 
        className={style.inputSearch} />

        <button 
        type='submit' 
        className={style.buttonNavSearch} >Search</button>

      </div>
    </form>
    </div>
  );
};

export default SerchBar;



