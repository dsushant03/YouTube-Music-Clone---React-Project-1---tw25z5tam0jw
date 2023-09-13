import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styles from '../styles/content.module.css'
import '../styles/default.css'
import { MyContext } from '../contexts/MyContext'
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoText from '../components/InfoText';


function SearchResult() {
    
    const {setSongId, setPlayerPaused, loggedIn, userToken, setInfo} = useContext(MyContext)

    const {key} = useParams();
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [songObj, setSongObj] = useState(null);
    const [albumObj, setAlbumObj] = useState(null);
    const[hovered, setHovered] = useState(false);


    const navigate = useNavigate();

    const config1 = {
        headers:{
            "Content-Type": "application/json",
            "projectId": "f104bi07c490"
        }
    };

    const config2 = {
        headers:{
          "Content-Type": "application/json",
          "projectId": "f104bi07c490",
          "Authorization": `Bearer ${userToken}`,
        }
      };
    
      const urlFav = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
    
    const handleSongPlay = ()=>{
        console.log('reached')

        if(loggedIn)
        {
            setSongId(songObj._id);
            setPlayerPaused(false);
        }
        else
        {
            navigate('/login');
        }
    }
    
    const handleAlbumClick = ()=>{
        console.log('reached')
        navigate(`/album/${albumObj._id}`)
    }

    const handleFavorite = ()=>{
        const body = JSON.stringify({
          songId : songObj._id
      })

      axios.patch(urlFav, body, config2).then((resp)=>{
        console.log(resp);
        setInfo(resp.data.message);
    }).catch((err)=>{
      console.log(err.response.data.message);
      setInfo(err.response.data.message);
    })

    }

    useEffect(()=>{
        const urlSong = `https://academics.newtonschool.co/api/v1/music/song?filter={"title":"${key}"}`
        const urlAlbum = `https://academics.newtonschool.co/api/v1/music/album?filter={"title":"${key}"}`
        setErr(false)
        setAlbumObj(null)
        setSongObj(null)
        const getData = async ()=>{
            setLoading(true);
            axios.get(urlSong, config1).then((resp)=>{
                setLoading(false);
                setSongObj(resp.data.data[0]);
            }).catch(()=>{
                axios.get(urlAlbum, config1).then((resp)=>{
                    setLoading(false);
                    setAlbumObj(resp.data.data[0])
                }).catch(()=>{
                    setLoading(false);
                    setErr(true);
                })
            })
            
        }

        getData();

    }, [key])
    
    return (
        <>
            <div style={{position:'fixed', right:'100px'}}>
                  <InfoText/>
                </div>
            {
                loading ? <></> :
                <div >
                    {      
                        err ? <div className={styles.searchResult}><h2>No search results found</h2></div> :
                        albumObj == null ? 
                        <div className={styles.searchResult}>
                            <h2>Top result</h2>
                            <div style={{display:'flex'}}>
                                <img onClick={handleSongPlay} style={{height:'70px', width:'70px'}} src={songObj.thumbnail} alt="" />
                                <div>
                                    <h3 onClick={handleSongPlay}>{songObj.title}</h3>
                                    <h4>{songObj.artist[0].name}</h4>
                                </div>
                                <FavoriteIcon onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} 
                                    onClick={handleFavorite}
                                    sx={{color:hovered? 'red' : 'white', cursor:'pointer', marginLeft:'100px'}}/>
                            </div>
                        </div> :
                        <div className={styles.searchResult}>
                            <h2>Top result</h2>
                            <div style={{display:'flex'}}>
                                <img onClick={handleAlbumClick} style={{height:'70px', width:'70px'}} src={albumObj.image} alt="" />
                                <div>
                                    <h3 onClick={handleAlbumClick}>{albumObj.title}</h3>
                                    <h4>{albumObj.artists[0].name}</h4>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default SearchResult