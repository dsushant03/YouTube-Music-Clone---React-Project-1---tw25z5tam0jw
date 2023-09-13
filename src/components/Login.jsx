import React from 'react'
import { TextField } from '@mui/material'
import PasswordField from './PasswordField'
import styles from '../styles/content.module.css'
import { MyContext } from '../contexts/MyContext'
import {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const navigate = useNavigate();
  const {content, setContent, setUserToken, setUserName, setLoggedIn} = useContext(MyContext);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [status, setStatus] = useState(0);

  const config = {
    headers:{
      "Content-Type": "application/json",
      "projectId": "f104bi07c490"
    }
  };

  const url = 'https://academics.newtonschool.co/api/v1/user/login';

  const handle1 = ()=>{
    setContent('signup');
  }

  const handle2 = ()=>{
      setContent('reset');
    }
    
  const handleChangePwd = (e)=>{
    setPwd(e.target.value);
  }

  const handleChangeEmail = (e)=>{
    setEmail(e.target.value);
  }

  const handleLogin = ()=>{
    setEmail('');
    setPwd('');

    const body = JSON.stringify({
        email, 
        password:pwd,
        appType: 'music'
    })


    axios.post(url, body, config).then((resp)=>{
        console.log(resp);
        setStatus(1);
        setUserToken(resp.data.token);
        setLoggedIn(true);
        setUserName(resp.data.data.name);

        setTimeout(() => {
          setStatus(0);
          navigate(-1);
        }, 700);
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
          label="Email"
          onChange={handleChangeEmail}
          value={email}
        />

        <PasswordField label='Password' callback={handleChangePwd} val={pwd}/>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'68px', color:'blue'}}>
                <h5 >New user? <span style={{cursor:'pointer', textDecoration: 'underline'}}
                    onClick={handle1}>Sign up</span></h5>
            </div>
            <Button onClick={handleLogin} sx={{ml:'190px'}} variant="contained">Sign In</Button>
        </div>
        <div style={{margin:'100px 0px 0px 158px'}}>
            {
                status == 0?
                <></> :
                status == 1 ?
                <h3 style={{color:'green'}}>Login Succesful !..     
                    </h3> :
                <h3 style={{color:'red'}}>Login Failed !.. Try again</h3>
            }
        </div>
    </>
  )
}

export default Login