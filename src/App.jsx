import {Box} from "@mui/material"
import Template from "./components/Template"
import { MyContext } from "./contexts/MyContext"
import React, { useContext } from 'react'
import "./styles/default.css"
import Home from "./pages/Home"
import Album from "./pages/Album"
import { Route, Routes } from "react-router-dom"
import styles from "./styles/content.module.css"
import MusicPlayer from "./components/MusicPlayer"
import Explore from "./pages/Explore"
import { useTheme } from "@emotion/react"
import SearchResult from "./pages/SearchResult"
import LoginPage from "./pages/LoginPage"
import Library from "./pages/Library"
import Fav from "./pages/Fav"
import AllSongsExplore from './pages/AllSongsExplore'
import Subscribe from "./pages/Subscribe"
import { useLocation } from "react-router-dom"

function App() {

  const {open, setOpen, subscribe} = useContext(MyContext)
  const location = useLocation();
  console.log(location);
  const shouldRender = (location.pathname !== '/subscribe');

  const theme = useTheme()

  return (
    <>
      {<Template/>}

      {
        shouldRender &&
        <Box className={styles.container} 
        sx={{
          width : open ? 'calc(100vw - 240px)' : 'calc(100vw-55px)',
          ml : open ? '240px' : '55px',
          zIndex: 3000
        }}>
  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/music" element={<MusicPlayer/>}/>
          <Route path="/album/:id" element={<Album/>}/>
          <Route path="/search-results/:key" element={<SearchResult/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/login/:id" element={<LoginPage/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/favorites" element={<Fav/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/allsongsexplore" element={<AllSongsExplore/>}/>
        </Routes>
      </Box>
      }
      <Box sx={{overflowX:'hidden'}}>
        <Routes>    
          <Route path="/subscribe" element={<Subscribe/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
