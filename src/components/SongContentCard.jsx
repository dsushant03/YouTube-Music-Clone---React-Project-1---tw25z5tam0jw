import React from 'react'
import "../styles/default.css"
import styles from '../styles/content.module.css'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext';
import { useContext } from 'react';


function ContentCard(props) {
  
  const navigate = useNavigate();
  const {loggedIn, setSongId, setPlayerPaused} = useContext(MyContext);

  const titleStyle = {
    whiteSpace:"nowrap",
    overflow: "hidden",
    textOverflow: 'ellipsis'
  }

  const hasOverflown = (str)=>{
    if(str.length>17)
      return true;
    return false;
  }

  const handlePlay = ()=>{
        if(loggedIn)
        {
          setSongId(props.info._id);
          setPlayerPaused(false);
        }
        else
        {
          navigate('/login');
        }
  }

  return (
    <>
        {/* onClick={()=>navigate(`/album/${props.info.id}`)} */}
        <div onClick={handlePlay} className={styles.card}>
          <div>
            <img src={props.info.thumbnail} alt="" />
          </div>
          <div>
            <h4 className={styles.cardTitle} style={hasOverflown(props.info.title) ? titleStyle : {}}>{props.info.title}</h4>
          </div>
          <div>
            <h4 className={styles.cardArtist}>{props.info.artist[0] ? props.info.artist[0].name : null}</h4>
          </div>
        </div>
    </>
  )
}

export default ContentCard