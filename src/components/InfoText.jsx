import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../contexts/MyContext';

function InfoText() {

  const[visible, setVisible] = useState(true);
  const{info, setInfo} = useContext(MyContext);

  useEffect(()=>{
      console.log('rendered')

    const timeoutId = setTimeout(() => {
        setInfo('');
      }, 2000);

       
    return ()=>{
        clearTimeout(timeoutId);
    }

  }, [info])

  return (
    <h4 style={{color:'rgb(157, 154, 154)'}}>{info.toUpperCase()}</h4>
  )
}

export default InfoText