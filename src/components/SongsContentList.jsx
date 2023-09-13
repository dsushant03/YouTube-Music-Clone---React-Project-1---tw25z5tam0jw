import { React } from 'react'
import SongContentCard from './SongContentCard'
import "../styles/default.css"
import styles from '../styles/content.module.css'
import { useNavigate } from 'react-router-dom'


function ContentList(props) {

  const navigate = useNavigate();

  return (
    <>
        <h4 className={styles.listSubHeading}>{props.subHeading}</h4>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1 className={styles.listHeading}>{props.heading}</h1>
            <h3 onClick={()=>navigate('/allsongsexplore', { state: props.data })} className={styles.seeAllSongs} >See all</h3>
        </div>
        <div className={styles.contentList} style={{display:'flex'}}>
            {
                props.data.map((e, i)=>(
                    <div key={i}>
                        <SongContentCard info={e}/>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default ContentList