import { useEffect, React, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import SongInList from '../components/SongInList';
import { List } from '@mui/material';
import styles from '../styles/content.module.css'
import InfoText from '../components/InfoText';


function Album() {

  const {id} = useParams();
  let [albumData, setAlbumData] = useState(null);


  const config = {
    headers:{
      "Content-Type": "application/json",
      "projectId": "f104bi07c490"
    }
  };

  const urlAlbum = `https://academics.newtonschool.co/api/v1/music/album/${id}`;

  useEffect(()=>{
    const getData = async ()=>{
        const resp = await axios.get(urlAlbum, config);
        console.log(resp)
        setAlbumData(resp.data.data);
    }

    getData()
    
  }, [])

  return (
    <>
        {
            ( albumData==null ) ?
            <></> :
            <>
                <div style={{position:'fixed', right:'100px'}}>
                  <InfoText/>
                </div>
                <div>
                  <div>
                      <div style={{display:'flex'}}>
                        <img src={albumData.image} style={{height:'264px', width:'264px'}} alt="" />
                        <div style={{marginLeft:'55px'}}>
                          <h1 style={{color:'white'}}>{albumData.title}</h1>
                          <h3 style={{color:'white'}}>{`${albumData.artists[0].name}...`}</h3>
                          <h4 style={{marginTop:'55px'}}>{albumData.description}</h4>
                        </div>
                      </div>
                      <table className={styles.table}>
                      {albumData.songs.map((e, i)=>(
                                  <SongInList song={e} artists={albumData.artists}/>
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