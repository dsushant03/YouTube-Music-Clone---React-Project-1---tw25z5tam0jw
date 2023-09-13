// Imports
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import iconImage from '../assets/ytIcon4.png'
import iconImageBlack from '../assets/ytIcon.png'
import MusicPlayer from './MusicPlayer'
import styles from '../styles/content.module.css'
import SearchBar from './SearchBar';
import UserDropdown from './UserDropdown';
import Subscribe from '../pages/Subscribe';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '75px'
}));

const Drawer = styled(MuiDrawer)(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        width: drawerWidth,
      '& .MuiDrawer-paper': {width: drawerWidth},
    }),
    ...(!open && {
        width: '60px',
      '& .MuiDrawer-paper': {width: '57px'},
    }),
  }),
);

export default function Template() {
  const theme = useTheme();
  const {open, setOpen, songId, loggedIn, subscribe} = useContext(MyContext)
  const [imgsrc, setImgsrc] = useState(iconImage);
  const navigate = useNavigate();
  
  return (
      <div className={styles.outerContainer} >
      <Box sx={{ display: 'flex'}}>
      
      <IconButton onClick={()=>navigate('/')}
          sx={{
            marginLeft:'55px',
            position: 'fixed',
            zIndex: theme.zIndex.drawer+1,
            marginTop: '15px' 
          }}
          >
          <img src={imgsrc} height='26px' width='80px'/>
          </IconButton>

        <SearchBar />

        <UserDropdown/>

      <Drawer variant="permanent" open={open} PaperProps={{sx : {borderRight:'0px', overflowY:'initial'}}} >
        <DrawerHeader sx={{ backgroundColor: 'black', opacity: 1 }}>
            <IconButton
            color="inherit"
            onClick={()=>{
              setOpen(!open)
              if(open)
                setImgsrc(iconImage)
              else
                setImgsrc(iconImageBlack)
            }}
            sx={{
              marginLeft: "9px",
              color: "white",
              borderRight: '0px'
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <List sx={{ backgroundColor: 'black', height:"100%" }}>
          
          {['Home', 'Explore', 'Library', 'Upgrade'].map((text, index) => (
            <div key={index}>
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon className={styles.sideNavIcons}
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "white"
                  }}
                >
                  {index == 0 ? <HomeIcon onClick={()=>{navigate('/')}}/> : 
                  index == 1 ? <ExploreIcon onClick={()=>{navigate('/explore')}}/> : 
                  index == 2 ? <LibraryMusicIcon onClick={()=>{loggedIn? navigate('/library'):navigate('/login')}}/> : 
                  <UpgradeIcon onClick={()=>{navigate('/subscribe')}}/>}
                </ListItemIcon>

                {
                  index == 0 ? <ListItemText className={styles.sideNavIcons} primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} 
                    onClick={()=>{navigate('/')}}/> : 
                  index == 1 ? <ListItemText className={styles.sideNavIcons} primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} 
                    onClick={()=>{navigate('/explore')}}/> : 
                  index == 2 ? <ListItemText className={styles.sideNavIcons} primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} 
                    onClick={()=>{loggedIn? navigate('/library'):navigate('/login')}}/> : 
                  <ListItemText className={styles.sideNavIcons} primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} 
                    onClick={()=>{navigate('/subscribe')}} />
                  }
              </ListItemButton>
            </ListItem>
            <Typography sx={{fontSize:'9px', color:'white', marginLeft:'15px', opacity: open ? 0 : 1}} >{text}</Typography>
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
    {
      (songId == null || !loggedIn) ?
      <></> :
      <MusicPlayer  />
    } 
    </div>
  );
}