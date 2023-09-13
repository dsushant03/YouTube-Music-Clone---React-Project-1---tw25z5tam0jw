import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner'
import SongsContentList from '../components/SongsContentList'
import styles from '../styles/content.module.css'


function Explore() {

const config = {
    headers:{
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
        }
    };

    const[loading, setLoading] = useState(true);
    const[moodDataState, setMoodDataState] = useState({});
    const[featDataState, setFeatDataState] = useState({});

    const urlFeat1 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Soul soother"}';
    const urlFeat2 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}';
    const urlFeat3 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}';
    const urlFeat4 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 50 of this month"}';
    const urlMood1 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}';
    const urlMood2 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}';
    const urlMood3 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}';
    const urlMood4 = 'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}';

    const moodCategories = ["happy", "romantic", "sad", "excited"];
    const featCategories = ["top20", "soul", "top50", "trending"];
    
    useEffect(()=>{
        const getData = async()=>{
            setLoading(true);
            
        console.log('start')
        let featData = {};
        let moodData = {};

        let resp = await axios.get(urlFeat1, config);
        let obj={
            data:resp.data.data, 
            title:"Soul soother"
        }
        featData["soul"]=obj;
        
        resp = await axios.get(urlFeat2, config);
        obj={
            data:resp.data.data, 
            title:"Top 20 of this week"
        }
        featData["top20"]=obj;
        
        resp = await axios.get(urlFeat3, config);
        obj={
            data:resp.data.data, 
            title:"Trending songs"
        }
        featData["trending"]=obj;

        
        resp = await axios.get(urlFeat4, config);
        obj={
            data:resp.data.data, 
            title:"Top 50 of this month"
        }
        featData["top50"]=obj;


        resp = await axios.get(urlMood1, config);
        obj={
            data:resp.data.data, 
            title:"Exciting"
        }
        moodData["excited"]=obj;

        resp = await axios.get(urlMood2, config);
        obj={
            data:resp.data.data, 
            title:"Happy"
        }
        moodData["happy"]=obj;

        resp = await axios.get(urlMood3, config);
        obj={
            data:resp.data.data, 
            title:"Romantic"
        }
        moodData["romantic"]=obj;

        resp = await axios.get(urlMood4, config);
        obj={
            data:resp.data.data, 
            title:"Sad"
        }
        moodData["sad"]=obj;

        setMoodDataState(moodData);
        setFeatDataState(featData);
        setLoading(false);
    }

    getData();
  }, [])

  return (
    <>
        {
            loading ?
            <div style={{marginLeft:'650px', marginTop:'270px'}}>
                <Oval 
                    height={120}
                    width={120}
                    color="red"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="white"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div> :
            <div>
                {
                    featCategories.map((e, i)=>(
                        // console.log(e)
                        <div className={styles.contentListDiv} key={i}>
                            <SongsContentList data={featDataState[e].data} heading={featDataState[e].title} subHeading="Featured Muisic"/>
                        </div>
                    ))
                }
                {
                    moodCategories.map((e, i)=>(
                        // console.log(e)
                        <div className={styles.contentListDiv} key={i}>
                            <SongsContentList data={moodDataState[e].data} heading={moodDataState[e].title} subHeading="Mood"/>
                        </div>
                    ))
                }
            </div>
        }
    </>
  )
}

export default Explore