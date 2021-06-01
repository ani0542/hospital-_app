import React from 'react'
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
import circleicon from "../../assets/circleicon.png"
import NavbarDropDown from '../Hospital/NavbarDropDown'   
import {  Input,Table,Icon } from 'semantic-ui-react'
import TableVaccine from './TableVaccine'
import { Link } from 'react-router-dom'

function MainQuataPage() {
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
                                                {/* <NavbarTab/> */}
                                                <img src={circleicon} alt='error' width='60px' height='60px' className='pt-2'/>
                                                <NavbarDropDown/>
                                     </div>
                              </nav>
                              <p className='vaccination-center-f mt-3'><span className='vaccination_center'>Vaccination center for</span> "Bengaluru Urban"</p>
                              <div className='welcome-text-vaccine-center'>
                                          <TableVaccine/>
                                          <Link to='/quota'>
                                                  <button className='bew_btn_vacc_center mt-5'> <span className='span_new_vacc'>ADD NEW VACCINATION CENTER</span></button>
                                          </Link>
                              </div>
                      </div>
              </div> 
        </>
    )
}

export default MainQuataPage
