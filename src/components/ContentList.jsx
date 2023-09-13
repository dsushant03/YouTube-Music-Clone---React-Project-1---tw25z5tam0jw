import { React, useEffect, useState, useContext } from 'react'
import ContentCard from './ContentCard';
import "../styles/default.css"
import styles from '../styles/content.module.css'

function ContentList(props) {

  return (
    <>
        <h4 className={styles.listSubHeading}>{props.headings[0]}</h4>
        <h1 className={styles.listHeading}>{props.headings[1]}</h1>
        <div className={styles.contentList} style={{display:'flex'}}>
            {
                props.data.map((e, i)=>(
                    <div key={i}>
                        <ContentCard info={e}/>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default ContentList