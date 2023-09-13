import { MyContext } from "../contexts/MyContext"
import { Box } from "@mui/material"
import styles from "../styles/content.module.css"
import React, { useContext } from 'react'
import ContentList from "../components/ContentList"
import { albumsDataObject} from '../data'
import Avatar from "@mui/material/Avatar"


function Home() {

  const {open, setOpen, loggedIn, userName} = useContext(MyContext)
  const categories = ["bollywood", "punjabi", "retro", "english"];


  return (
    <>  
        <div>
            <div>
                {
                    loggedIn ?
                    <div style={{display:'flex', marginBottom:'50px'}}>
                        <Avatar  
                            sx={{
                                // marginLeft:'20px',
                                marginTop:'20px',
                                cursor:'pointer',
                                backgroundColor:'grey'}} >
                                {userName[0]}
                        </Avatar>
                        <div style={{marginLeft:'25px', color:'white', marginTop:'15px'}}>
                            <h3 style={{color:'rgb(157, 154, 154)'}}>{userName.toUpperCase()}</h3>
                            <h2>Welcome,</h2>
                        </div>
                    </div>:
                    <></>
                }
                {
                    categories.map((e, i)=>(
                        <div className={styles.contentListDiv} key={i}>
                            <ContentList data={albumsDataObject[e]} headings={albumsDataObject[`${e}Titles`]}/>
                        </div>
                    ))
                }
            </div>
        </div>
  </>
  )
}

export default Home