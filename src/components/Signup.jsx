import React, { useEffect } from 'react'
import { TextField } from '@mui/material'
import PasswordField from './PasswordField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import {useContext} from 'react'
import { MyContext } from '../contexts/MyContext'

function Signup() {
  
  // set status to zero before unmounting.
//   useEffect(()=>{
//     return ()=>{
//         setStatus(0);
//     }
//   })

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [status, setStatus] = useState(0);
  const {content, setContent} = useContext(MyContext);
  
  const config = {
    headers:{
      "Content-Type": "application/json",
      "projectId": "f104bi07c490"
    }
  };

  const url = 'https://academics.newtonschool.co/api/v1/user/signup'

  const handleLogin = ()=>{
    setStatus(0);
    setContent('login');
  }

  const handleChangeName = (e)=>{
    setName(e.target.value);
  }

  const handleChangeEmail = (e)=>{
    setEmail(e.target.value);
  }

  const handleChangePwd = (e)=>{
    setPwd(e.target.value);
  }

  const handleSignup = ()=>{

    setName('');
    setEmail('');
    setPwd('');
    const body = JSON.stringify({
        name, 
        email, 
        password:pwd,
        appType: 'music'
    })

    axios.post(url, body, config).then((resp)=>{
        console.log(resp);
        setStatus(1);
    })
    .catch((err)=>{
        console.log(err.response.data.message);
        setStatus(-1);
    })
  }

  return (
    <>
        <TextField sx={{width:'400px', marginLeft:'65px', marginBottom:'15px', marginTop:'50px'}}
          required
          label="Name"
          value={name}
          onChange={handleChangeName}
        />
        <TextField sx={{width:'400px', marginLeft:'65px', marginBottom:'15px'}}
          required
          label="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <PasswordField label='password' callback={handleChangePwd} val={pwd}/>
        
        <Button onClick={handleSignup} sx={{ml:'373px'}} variant="contained">Sign Up</Button>

        <div style={{margin:'100px 0px 0px 158px'}}>
            {
                status == 0?
                <></> :
                status == 1 ?
                <h3 style={{color:'green'}}>Signup Succesful !..     
                    <span onClick={handleLogin} style={{cursor:'pointer', textDecoration: 'underline', color:'blue'}}> Login</span></h3> :
                <h3 style={{color:'red'}}>Signup Failed !.. Try again</h3>
            }
        </div>
    </>
  )
}

export default Signup