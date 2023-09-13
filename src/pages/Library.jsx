import React from 'react'
import styles from '../styles/content.module.css'
import likeImg from '../assets/likes.jpg'
import { useNavigate } from 'react-router-dom';


function Library() {

  const navigate = useNavigate();

  return (
    <>
        <div style={{}}>
            <div  className={styles.card}>
                <div>
                    <img onClick={()=>navigate('/favorites')} src={likeImg} alt="" />
                </div>
                <div>
                    <h4 onClick={()=>navigate('/favorites')} className={styles.cardTitle} >Your Favorites</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Library