import { createContext, useState } from "react";

export const MyContext = createContext()

export const MyContextProvider = (props)=>{
    const [open, setOpen] = useState(false)
    const [populated, setPopulated] = useState(false)
    const [songId, setSongId] = useState(null)
    const [playerPaused, setPlayerPaused] = useState(false);
    const [modal, setModal] = useState(false);
    const [content, setContent] = useState('login');
    const [userToken, setUserToken] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [info, setInfo] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    return(
        <MyContext.Provider value={{open, setOpen, populated, setPopulated, songId, setSongId, 
            playerPaused, setPlayerPaused, modal, setModal, content, setContent, userToken, setUserToken,
            loggedIn, setLoggedIn, userName, setUserName, info, setInfo, subscribe, setSubscribe}}>

            {props.children}
        </MyContext.Provider>
    )
}