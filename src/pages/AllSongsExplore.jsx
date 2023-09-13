import { useEffect, React, useState } from 'react';
import SongInList from '../components/SongInList';
import styles from '../styles/content.module.css'
import InfoText from '../components/InfoText';
import { useLocation } from 'react-router-dom';


function Album() {

  const location = useLocation();
  const songsData = location.state;

  return (
    <>
        {
            <>
                <div style={{position:'fixed', right:'100px'}}>
                  <InfoText/>
                </div>
                <div>
                  <div>
                      <table className={styles.table}>
                      {songsData.map((e, i)=>(
                                <SongInList song={e} artists={songsData[i].artist}/>
                          ))}
                      </table>
                  </div>
                </div>
            </>
        }
    </>
  )
}

export default Album