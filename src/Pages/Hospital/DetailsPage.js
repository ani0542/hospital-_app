import React from 'react'
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
import circleicon from "../../assets/circleicon.png"
import NavbarDropDown from './NavbarDropDown'   
import skyback from "../../assets/skyback.png"
import { Link } from 'react-router-dom'
import biguser from "../../assets/biguser.png"

function DetailsPage() {
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

                              <div className='welcome-text'>
                                       <div className='welcome_text_inside mt-5'>
                                                 <span className='ref_id_title'>Reference id details</span>
                                                 <div className='users_text mt-5'>
                                                         <img src={biguser} alt='error' width='60px' height='60px'/>
                                                            <div className='sanjay_text'>
                                                                <p className='sanjay_b_s'>SANJAY B S</p>
                                                                <p className='sanjay_id'>Reference id - 887788333</p>
                                                            </div>
                                                 </div> 
                                                 <div className='green_completed_dose mt-4'>
                                                        <span className='dose-1-completed p-4'>
                                                            Dose 1-Completed - COVAXIN given on 20th April 2021
                                                        </span>
                                                 </div>
                                                 <div className='red_incompleted_dose mt-4'>
                                                        <span className='dose-2-scheduled-f p-4 text-capitalize'>
                                                              Dose 2-Completed - scheduled for 25th April 2021
                                                        </span>
                                                             <div className='type_hospital p-3'>
                                                                    <div>
                                                                            <span className='vaccine-type-locatio'>Vaccine type </span><br/>
                                                                            <span className='vaccine-type-locatio'>Location</span>
                                                                    </div>
                                                                    <div className='covaxin_right'>
                                                                        <span className='covaxin-location-s'>COVAXIN </span><br/>
                                                                        <span className='covaxin-location-s'>Location - SK Hospital Nagarbhavi</span>
                                                                    </div>
                                                             </div>
                                                      
                                                 </div>
                                                 <Link to=''>
                                                         <button className='dose_2_complete_btn mt-4'>
                                                                <span className='click-if-dose-2-is-c'>click if dose 2 is complete</span>
                                                         </button>
                                                 </Link>
                                       </div>
                              </div>
                      </div>
              </div>
        </>
    )
}

export default DetailsPage
