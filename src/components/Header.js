import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import 'react-slide-out/lib/index.css';
import { useState } from 'react';



// function Header() {
//     
//     const {isOpen, SetIsOpen} = useState(false)
//     const openSlider = () => {
//         SetIsOpen(true)
//       }
//      const  closeSlider = () => {
//         SetIsOpen(false)
//       }
    

    
//   return (
//       <>
//       <a href='#' onClick={openSlider}>Open Slider</a>

//       <Slider isOpen={isOpen} onOutsideClick={closeSlider} >

//     <div>...Some heavy scrollable content...</div>
//         </Slider>


//         <div>Header</div>
//         {
//             isAuthenticated ? (

//                 <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//             Log Out
//             </button>
//             ):(

//                 <button onClick={() => loginWithRedirect()}>Log In</button>
//             )
//         }


//     </>
//   )
// }




import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import HeaderIcon from '../assests/menu-icon.png'


export default function Header() {
  const [state, setState] = React.useState({
    right: false,
  });
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  return (
    <div className='header-container'>
        <React.Fragment >
          <Button onClick={toggleDrawer('right', true)}>
            <img className='menu-icon' src={HeaderIcon} alt="menu-icon" />
          </Button>
          <Drawer
            className='menu-item-container'
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <div className='menu-item-list'>
                {isAuthenticated && (
            <div className='menu-list'>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
    )}
                <div className='menu-list'> SHIPPING ADDRESS</div>
                <div className='menu-list'> CLAIM YOUR CERTIFICATE</div>
                <div className='menu-list'> TERMS & CONDITIONS</div>
                <div className='menu-list'> PRIVACY POLICY</div>
                <div className='menu-list'> CONTACT US</div>
                <div className='menu-list'> FAQ’S</div>

            </div>
            {
            isAuthenticated ? (

                <button className='login-logout-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out <LogoutIcon sx={{fontSize:"25px"}}/>
            </button>
            ):(

                <button className='login-logout-button' onClick={() => loginWithRedirect()}>Log In <LoginIcon sx={{fontSize:"25px"}}/></button>
            )
        }
          </Drawer>
        </React.Fragment>

    </div>
  );
}