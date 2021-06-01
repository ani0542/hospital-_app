import React from 'react'  
import skyback from "../../assets/skyback.png"
import { Link } from 'react-router-dom'

function ReferenceInfoPage() {
    return (
        <>
                <div className='welcome-text'>
                                       <div className='welcome_text_inside mt-5'>
                                            <h1 className='details_ref'>Enter reference id to get the details</h1>
                                            <img src={skyback} alt='error' width='310px' height='189px'/>

                                            <form>
                                                              <input 
                                                                type='text'
                                                               
                                                                placeholder='Enter reference id'
                                                              
                                                                required
                                                                className='form-control reference_id my-3 p-3 mx-5'
                                                            />

                                                              <Link to='/details'> <button className='btn_get_details mx-5'><span className='span_btn_get_details'>GET DETAILS</span></button></Link>
                                            </form>
                                       </div>
                              </div> 
        </>
    )
}

export default ReferenceInfoPage
