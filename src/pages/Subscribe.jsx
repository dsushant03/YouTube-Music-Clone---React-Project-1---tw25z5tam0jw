import React from 'react'
import { Box } from '@mui/material'
import styles from '../styles/content.module.css'
import { MyContext } from '../contexts/MyContext'
import { useContext, useEffect } from 'react'
import iconImage from '../assets/ytIcon2.png'
import Button from '@mui/material/Button';


function Subscribe() {

  const{setSubscribe, setSongId} = useContext(MyContext);
  const headphoneImg = "https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_headset_84x84.png";
  const playImg = "https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_play_84x84.png";
  const downloadImg = "https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_download_84x84.png";

  useEffect(()=>{
    setSubscribe(true);
    setSongId(null);

    return ()=>{
        setSubscribe(false);
    }
  }, [])
  return (
    <div >

        <Box className={styles.subsContainer} sx={{
                backgroundColor:'black'
            }}>
            
            <Box sx={{height:'470px', backgroundColor:'rgb(40,40,40)', marginTop:'69px',  textAlign:'center', 'color': 'white'}}>
                <img src={iconImage} height="50px" width="170px" 
                    style={{ marginTop:'50px', marginRight:'23px'}} alt="" />

                <div style={{marginTop:'25px'}}>
                    <h1 style={{fontWeight:'100'}}>Get Music Premium to listen to music</h1>
                    <h1 style={{fontWeight:'100'}}>ad-free, offline & with your screen off</h1>
                </div>

                <Button sx={{borderRadius:'20px', marginTop:'40px'}} 
                  variant="contained">Get Premium</Button>

                <h3 style={{fontWeight:'100', marginTop:'25px'}}>Pre-paid and subscription plans available. Starting at ₹99.00/month.</h3>
                <h3 style={{fontWeight:'100'}}>₹99.00/month.</h3>

                <h6 style={{fontWeight:'100', marginTop:'25px'}}>Or save money with an 
                  <span style={{color:'#2185ff', cursor:'pointer'}}>&nbsp;annual, family or student pack</span></h6>

                <h6 style={{marginTop:'20px', color:'#2185ff', cursor:'pointer'}}>Restrictions apply. Learn more here.</h6>
            </Box>
            <Box sx={{height:'230px'}}>
              <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'20px'}}>
                  <img src={headphoneImg}  alt="" />
                  <img src={playImg}  alt="" />
                  <img src={downloadImg}  alt="" />
              </div>
              <div style={{display:'flex', marginTop:'10px'}}>
                  <div style={{marginLeft:'295px'}}>
                    <h2 style={{color:'white', fontWeight:'100'}}>Listen in the</h2>
                    <h2 style={{color:'white', fontWeight:'100'}}>background</h2>
                  </div>

                  <div style={{marginLeft:'260px'}}>
                    <h2 style={{color:'white', fontWeight:'100'}}>Ad-free music</h2>
                  </div>

                  <div style={{marginLeft:'230px'}}>
                    <h2 style={{color:'white', fontWeight:'100'}}>Download and go</h2>
                  </div>
              </div>

              <div style={{display:'flex', marginTop:'10px'}}>
                    <div style={{textAlign:'center', marginLeft:'220px'}}>
                      <h4 style={{fontWeight:'100'}}>Don’t worry about your music stopping</h4>
                      <h4 style={{fontWeight:'100'}}>when you lock your screen or use other</h4>
                      <h4 style={{fontWeight:'100'}}>apps.</h4>
                    </div>

                    <div style={{textAlign:'center', marginLeft:'115px'}}>
                      <h4 style={{fontWeight:'100'}}>Listen to the world of music without ads.</h4>
                    </div>

                    <div style={{textAlign:'center', marginLeft:'125px'}}>
                      <h4 style={{fontWeight:'100'}}>Listen to your favorite music on the go.</h4>
                    </div>
              </div>
            </Box>
            <Box className={styles.coverImage1} >
              <div style={{paddingLeft:'350px', paddingTop:'50px'}}>
                <h1 style={{color:'white', fontWeight:'100', marginTop:'100px'}}>Background play</h1>
                <h4 style={{marginTop:'30px', fontWeight:'100'}}>Turn off the screen, use other apps, all while your music</h4>
                <h4 style={{fontWeight:'100'}}>keeps playing.</h4>
              </div>
            </Box>
            <Box sx={{height:'20px'}}></Box>

            <Box className={styles.coverImage2}>
              <div style={{paddingLeft:'800px', paddingTop:'1px'}}>
                  <h1 style={{color:'white', fontWeight:'100', marginTop:'100px'}}>No ads or interruptions</h1>
                  <h1 style={{color:'white', fontWeight:'100'}}>on music</h1>
                  <h4 style={{marginTop:'30px', fontWeight:'100'}}>Easily explore the world of music without any</h4>
                  <h4 style={{fontWeight:'100'}}>interruptions.</h4>
                </div>
            </Box>

            <Box sx={{height:'20px'}}></Box>
            <Box className={styles.coverImage3}>
                <div style={{paddingLeft:'400px', paddingTop:'1px'}}>
                  <h1 style={{color:'white', fontWeight:'100', marginTop:'100px'}}>Download your favorite</h1>
                  <h1 style={{color:'white', fontWeight:'100'}}>tracks</h1>
                  <h4 style={{marginTop:'30px', fontWeight:'100'}}>No connection? No problem. Take your songs, albums</h4>
                  <h4 style={{fontWeight:'100'}}>and playlists offline.</h4>
                </div>
            </Box>
            <Box sx={{height:'200px'}}>
              <h5 style={{color:'white', fontWeight:'500', paddingTop:'40px', marginLeft:'380px'}}>Have other questions?
                <span style={{color:'#2185ff', cursor:'pointer'}}>&nbsp;Visit the YouTube Help Center</span></h5>
            </Box>
        </Box>
    </div>
  )
}

export default Subscribe