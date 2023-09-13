import React from 'react'
import Avatar from '@mui/material/Avatar';
import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { MyContext } from '../contexts/MyContext'

function UserDropdown() {
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn, setUserToken, userName, setContent} = useContext(MyContext);

  const handleClick = ()=>{
    
    if(loggedIn)
    {
        setLoggedIn(false);
        setUserToken('');
    }
    else
    {
        navigate('/login');
    }

  }

  return (
    <>
        <PopupState variant="popover" popupId="demo-popup-menu" >
            {(popupState) => (
                <>
                    <Avatar  
                        sx={{position:'fixed',
                            right:'60px',
                            top:'20px',
                            cursor:'pointer',
                            backgroundColor:'grey'}}
                            {...bindTrigger(popupState)} >
                            {loggedIn ? userName[0] : null}
                    </Avatar>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={()=>{popupState.close; navigate('/subscribe')}}>Subscribe</MenuItem>
                        <MenuItem onClick={()=>{popupState.close(); handleClick()}}>
                            {loggedIn? "Log out" : "Login"}</MenuItem>
                        {loggedIn ? <MenuItem onClick={()=>{popupState.close(); navigate('/login/update')}}>
                            Update Password</MenuItem>: []}
                    </Menu>
                </>
            )}
        </PopupState>
    </>
  )
}

export default UserDropdown