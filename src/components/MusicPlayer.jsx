import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import { MyContext } from '../contexts/MyContext'
import styles from '../styles/content.module.css'
import { VolumeDownRounded } from '@mui/icons-material';




const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  margin : 'auto',
  width: '100vw',
  backgroundColor:'rgb(33,33,33)'
}));

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
    color: 'rgb(157, 154, 154)'
});

export default function MusicPlayer(props) {
    
    const audioRef = useRef();
    const theme = useTheme();
    const [position, setPosition] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [songObj, setSongObj] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

    const {songId, playerPaused, setPlayerPaused} = useContext(MyContext)
    
    const config = {
        headers:{
            "Content-Type": "application/json",
            "projectId": "f104bi07c490"
        }
    };

    const url = `https://academics.newtonschool.co/api/v1/music/song/${songId}`;
    useEffect(()=>{
    // console.log(theme.zIndex)
    const getData = async ()=>{
        const resp = await axios.get(url, config);
        let songInfo = resp.data.data;
        setSongObj(songInfo)
        setLoaded(true);
    }
    
    audioRef.current.addEventListener('loadedmetadata', async ()=>{
        await setDuration(audioRef.current.duration)
    })

    getData();
    console.log('musicplayer');

    return ()=>{
        setLoaded(false);
    }

  },[songId])


  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handlePlayPause = ()=>{
    if(!playerPaused)
        audioRef.current.pause();
    else
        audioRef.current.play();
  }

  const handleTimeUpdate = ()=>{
    setPosition(audioRef.current.currentTime)
  }

  const mainIconColor = '#fff';
  
  return (
    
    <Box sx={{width: '100vw', position: 'fixed', bottom:'0px', zIndex: theme.zIndex.drawer+1,}}>
      
      {
        loaded ?
        <Widget >
        <Slider
          aria-label="time-indicator"
          value={position}
          min={0}
          step={0.25}
          max={duration}
          onChange={(_, value) => {
            setPosition(value);
            audioRef.current.currentTime = value;
          }}
          sx={{
            height: 2,
            '& .MuiSlider-thumb': {
                width: 12,
                height: 12,
                color: 'white',
              },
              color: 'black',
                '& .MuiSlider-track': {
                    border: 'none',
                    color: 'red'
                },
          }}
        /> 
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '23px',
            
          }}
        >
          <div style={{display:'flex'}}>
            <IconButton aria-label="previous song" size="small" >
                <SkipPreviousIcon fontSize="medium" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
                aria-label={playerPaused ? 'play' : 'pause'}
                onClick={() => {
                    setPlayerPaused(!playerPaused);
                    handlePlayPause();
                }}>
                {playerPaused ? (
                <PlayArrowSharpIcon
                    sx={{ fontSize: '2rem' }}
                    htmlColor={mainIconColor}
                />
                ) : (
                <PauseSharpIcon sx={{ fontSize: '2rem' }} htmlColor={mainIconColor}  />
                )}
            </IconButton>
            <IconButton aria-label="next song">
                <SkipNextIcon fontSize="medium" htmlColor={mainIconColor} />
            </IconButton>

                <TinyText sx={{marginTop:'17px'}}>{formatDuration(Math.floor(position))}</TinyText>
                <TinyText sx={{marginTop:'17px'}}>/{formatDuration(Math.floor(duration))}</TinyText>

          </div>

          <div className={styles.songInPlayer}>
            <img src={songObj.thumbnail} alt="" />
            <div>
                <h4>{songObj.title}</h4>
                <h5>{songObj.artist[0].name}</h5>
            </div>
        </div>

          <div style={{display:'flex', alignItems:'center'}}>
            <VolumeDownRounded htmlColor='white' />
            <Slider
                min={0}
                max={100}
                onChange={(_, value) => {
                //   setPosition(value);
                  audioRef.current.volume = value/100;
                }}
                aria-label="Volume"
                defaultValue={30}
                sx={{
                    marginRight:'10px',
                    marginLeft:'10px',
                    width:'100px',
                color: 'black',
                '& .MuiSlider-track': {
                    border: 'none',
                    color: 'red'
                },
                '& .MuiSlider-thumb': {
                    width: 12,
                    height: 12,
                    backgroundColor: '#fff',
                },
                }}
            />
          </div>

        </Box>

      </Widget> :
      <></>
      }
      
      <audio 
            src={songObj.audio_url}
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            autoPlay
        >
      </audio>
    </Box>
  );
}