import {React, useContext, useMemo, useState} from 'react'
import { MyContext } from '../contexts/MyContext'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '@mui/material';
import axios from 'axios';

function SongInList(props) {
  
  const navigate = useNavigate();
  const {setSongId, setPlayerPaused, loggedIn, userToken, setInfo} = useContext(MyContext)
  const[hovered, setHovered] = useState(false);
  const[likHovered, setLikeHovered] = useState(false);


  // Time duration not provided in API. This is to avoid API calls to get artist name for each song in the list
    const getRandomTimeDuration = useMemo(()=> {
      const randomValue = Math.random() * 4;
      const randomMinutes = Math.floor(randomValue) + 3;
      const randomSeconds = Math.floor(Math.random() * 60);
      const formattedTime = `${randomMinutes}:${randomSeconds.toString().padStart(2, '0')}`;
      return formattedTime;
    },[])

    // Artist name not provided in API. This is to avoid API calls to get artist name for each song in the list
    const getRandomArtistFromArray = useMemo(() =>{

        if(props.artists.length>0)
        {
          const randomIndex = Math.floor(Math.random() * props.artists.length);
          const randomArtist = props.artists[randomIndex];
          return randomArtist.name;
        }

    },[])

    const config = {
      headers:{
        "Content-Type": "application/json",
        "projectId": "f104bi07c490",
        "Authorization": `Bearer ${userToken}`,
      }
    };
  
    const url = 'https://academics.newtonschool.co/api/v1/music/favorites/like';

    const handleFavorite = ()=>{
        const body = JSON.stringify({
          songId : props.song._id
      })

      axios.patch(url, body, config).then((resp)=>{
        console.log(resp);
        setInfo(resp.data.message);
    }).catch((err)=>{
      console.log(err.response.data.message);
      setInfo(err.response.data.message);
    })

    }

  return (

    <>
      <tr>
        <td onClick={async()=>{
            if(loggedIn)
            {
              setSongId(props.song._id);
              setPlayerPaused(false);
            }
            else
            {
              navigate('/login');
            }
          }}
          
          style={{color:"white", cursor:'pointer'}}>
          <h4 onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} 
            style={{color: hovered? 'white' : 'rgb(157, 154, 154)'}}>{props.song.title}</h4>
        </td>
        <td style={{color:"rgb(157, 154, 154)"}}>{getRandomArtistFromArray}</td>
        <td style={{color:"rgb(157, 154, 154)"}}>{getRandomTimeDuration}</td>
        <td><FavoriteIcon onMouseEnter={()=>setLikeHovered(true)} onMouseLeave={()=>setLikeHovered(false)}
          onClick={handleFavorite}
          sx={{color:likHovered? 'red' : 'white', marginTop:'10px', cursor:'pointer'}}/></td>
      </tr>
    </>
  )
}

export default SongInList