import React from 'react'
import { TextField } from '@mui/material'
import PasswordField from './PasswordField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import {useContext} from 'react'
import { MyContext } from '../contexts/MyContext'

function ChangePwd() {

  const {userToken} = useContext(MyContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd1, setPwd1] = useState('');
  const [pwd2, setPwd2] = useState('');

  const config = {
    headers:{
      "Content-Type": "application/json",
      "projectId": "f104bi07c490",
      "Authorization": `Bearer ${userToken}`
    }
  };

  const url = 'https://academics.newtonschool.co/api/v1/user/updateMyPassword';

  const handleChangeName = (e)=>{
    setName(e.target.value);
  }

  const handleChangeEmail = (e)=>{
    setEmail(e.target.value);
  }

  const handleChangePwd1 = (e)=>{
    setPwd1(e.target.value);
  }

  const handleChangePwd2 = (e)=>{
    setPwd2(e.target.value);
  }

  const handleNext = ()=>{
    setName('');
    setEmail('');
    setPwd1('');
    setPwd2('');

    const body = JSON.stringify({
        name, 
        email, 
        passwordCurrent:pwd1,
        password:pwd2,
        appType: 'music'
    })

    axios.patch(url, body, config).then((resp)=>{
        console.log(resp);
        // setStatus(1);
    })
    .catch((err)=>{
        console.log(err.response.data.message);
        // setStatus(-1);
    })
  }

  return (
    <>
        <TextField sx={{width:'400px', marginLeft:'65px', marginBottom:'15px', marginTop:'50px'}}
          required
          label="Name"
          onChange={handleChangeName}
          value={name}
        />
        <TextField sx={{width:'400px', marginLeft:'65px', marginBottom:'15px'}}
          required
          label="Email"
          onChange={handleChangeEmail}
          value={email}
        />
        <PasswordField label='Old password' callback={handleChangePwd1} val={pwd1}/>

        <PasswordField label='New password' callback={handleChangePwd2} val={pwd2}/>

        <Button onClick={handleNext} sx={{ml:'393px'}} variant="contained">Next</Button>
    </>
  )
}

export default ChangePwd