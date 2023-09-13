import React from 'react'
import "../styles/default.css"
import styles from '../styles/content.module.css'
import { useNavigate } from 'react-router-dom';


function ContentCard(props) {
  
  const navigate = useNavigate();

  const titleStyle = {
    whiteSpace:"nowrap",
    overflow: "hidden",
    textOverflow: 'ellipsis'
  }

  const hasOverflown = (str)=>{
    if(str.length>19)
      return true;
    return false;
  }

  return (
    <>
        <div onClick={()=>navigate(`/album/${props.info.id}`)} className={styles.card}>
          <div>
            <img src={props.info.image} alt="" />
          </div>
          <div>
            <h4 className={styles.cardTitle} style={hasOverflown(props.info.title) ? titleStyle : {}}>{props.info.title}</h4>
          </div>
          <div>
            <h4 className={styles.cardArtist} style={hasOverflown(props.info.artists) ? titleStyle : {}}>{props.info.artists}</h4>
          </div>
        </div>
    </>
  )
}

export default ContentCard