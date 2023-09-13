import {React, useContext, useEffect, useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MyContext } from '../contexts/MyContext'
import { useNavigate, useParams } from 'react-router-dom';
import Login from '../components/Login';
import iconImage from '../assets/ytIconWhite.jpg'
import Signup from '../components/Signup';
import ChangePwd from '../components/ChangePwd';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height:'600px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function LoginPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const {modal, setModal, content, setContent} = useContext(MyContext);
  const handleClose = () => {
    setModal(false);
    navigate(-1);
  }

  useEffect(()=>{
    setModal(true);
    if(id == null)
      setContent('login');
    else
      setContent(id);
  }, [])
  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
      >
        <Fade in={modal}>
          <Box sx={style}>
            <img src={iconImage} style={{marginLeft:'200px'}} height={'35px'} alt="" />
            {
              content == 'login' ?
              <Login/> :
              content == 'signup' ?
              <Signup/> :
              <ChangePwd/>
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default LoginPage