import React from 'react'
import { useEffect, useContext, useState } from 'react';
import { MyContext } from '../contexts/MyContext';
import axios from 'axios';
import SongInList from '../components/SongInList';
import styles from '../styles/content.module.css'
import InfoText from '../components/InfoText';

function Fav() {

  const {userToken, info} = useContext(MyContext);
  const url = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
  const [songsData, setSongsData] = useState([]);

  const config = {
    headers:{
      "Content-Type": "application/json",
      "projectId": "f104bi07c490",
      "Authorization": `Bearer ${userToken}`,
    }
  };

  useEffect(()=>{
    const getData = async ()=>{
      const resp = await axios.get(url, config);
      setSongsData(resp.data.data.songs);
    }
    
    getData();
  }, [info])

  return (
    <>
        <div style={{position:'fixed', right:'100px'}}><InfoText/></div>

        <div>
          <h2 style={{color:'white', marginTop:'55px'}}>Your Likes</h2>
          <table className={styles.table}>
            {songsData.map((e, i)=>(
                        <SongInList song={e} artists={[]}/>
                ))}
            </table>
        </div>
    </>
  )
}

export default Fav