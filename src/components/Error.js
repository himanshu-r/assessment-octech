import React from 'react'
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className='error-container container'>
    <div className='error'>404 Error</div>
    <NavLink to="/" className="back-btn">
            Go Back
    </NavLink>
    
    </div>
  )
}

export default Error