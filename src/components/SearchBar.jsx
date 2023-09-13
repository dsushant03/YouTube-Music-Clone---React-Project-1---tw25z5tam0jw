import {React, useContext, useState} from 'react'
import styles from '../styles/content.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { MyContext } from '../contexts/MyContext'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  
  const {open, subscribe} = useContext(MyContext);
  const[focussed, setFocussed] = useState(false);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  
  const handleFocus = ()=>{
    setFocussed(true);
  }

  const handleBlur = ()=>{
    setFocussed(false);
  }

  const handleKeyDown = (e)=>{
    if(e.key == 'Enter')
    {
        navigate(`/search-results/${input}`);
        // console.log(input)
    }
  }

  const handleChange = (e)=>{
    setInput(e.target.value)
  }
  
  return (
        <div style={{left: open? '350px':'165px', display: subscribe ? 'none' : ''}} 
          className={`${styles.searchBar} ${focussed ? styles.inputFocussed : styles.inputBlurred}`}>
            <SearchIcon sx={{marginLeft:'5px', marginTop:'5px'}}></SearchIcon>
            <span>
                <input type="text" 
                className={focussed ? styles.inputFocussed : styles.inputBlurred}
                placeholder='Search songs, albums'
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                onK />
            </span>
        </div>
  )
}

export default SearchBar