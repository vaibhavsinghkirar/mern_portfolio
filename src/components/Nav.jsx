import React from 'react'
import { HashLink as Link } from "react-router-hash-link"


function Nav() {
  return (
    <>
      <div id='nn' className='nav'>
        <div className='two'>
          <ul>
            <li><Link className='smart' to="#nn">
              Home
            </Link></li>
            <li><Link className='smart' to="#skill">
              About
            </Link></li>
            <li><Link className='smart' to="#cont">
              Contact
            </Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
