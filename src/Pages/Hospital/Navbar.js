import React from 'react'
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
import circleicon from "../../assets/circleicon.png"
import NavbarDropDown from './NavbarDropDown'   
import ReferenceInfoPage from './ReferenceInfoPage'

function Navbar() {
    return (
        <>
              <div className='home'>
                      <div className='wrapper'>
                              <nav className='nav-area'>
                                     <ul>
                                            <li>
                                                <span>
                                                          <img src={governmebticon} alt='error' width='60px' height='60px' className='pt-2'/>
                                                </span>
                                            </li>
                                            <li>
                                                   <span>
                                                           <img src={cowinicon} alt='error' height='56px' width='238px' className='pt-2'/>
                                                   </span>
                                            </li>
                                           
                                     </ul>
                                     <div className='rightside'>
                                               <img src={circleicon} alt='error' width='60px' height='60px' className='pt-2'/>
                                                <NavbarDropDown/>
                                     </div>
                              </nav>

                             <ReferenceInfoPage/>
                      </div>
              </div>
        </>
    )
}

export default Navbar
