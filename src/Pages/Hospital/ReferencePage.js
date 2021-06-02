import React,{useEffect, useState} from 'react'
import Header from '../../components/common/header/header'
import DetailsPage from './DetailsPage'
import skyback from "../../assets/skyback.png"
import Navbar from './Navbar'

import swal from 'sweetalert'

const ReferencePage=(props)=> {
    
   
   

    const getReference=()=>{
        const ref_id=document.getElementById('reference').value
       // alert(ref_id)
       if(ref_id === '')
       {
        swal("Error!", "refid required", "error");
       }
       else
       {
        props.history.push(`/details/${ref_id}`)
       }
      
      
    }

   

    return (
        <>
        <Header />
        
            <div className="container modified_container mt-5">
            <h1 style={{"textAlign":"center"}}>Enter Reference id to get the details</h1>
            <div style={{"textAlign":"center"}}>
            <img src={skyback} alt='error'/>
            </div>
            <div style={{"textAlign":"center"}} className="mt-5">
                <input type="text" id="reference" placeholder='Enter reference id' className='reference_id' />
            </div>
            <div style={{"textAlign":"center"}} className="mt-5">
                <input type="button" value="GET DETAILS" onClick={getReference} className='reference_button' />
            </div>
            </div>
        
        
        </>
            //    <div className='welcome-text'>
            //                            <div className='welcome_text_inside mt-5'>
            //                                 <h1 className='details_ref'>Enter reference id to get the details</h1>
            //                                 <img src={skyback} alt='error' width='310px' height='189px'/>

                                            
            //                                 <input type='text' placeholder='Enter reference id' className='reference_id my-3 p-3 mx-5'
            //                                                 />

            //                                                   <button className='btn_get_details mx-5'><span className='span_btn_get_details'>GET DETAILS</span></button>
                                        
            //                            </div>
            //                   </div> 
              
        
    )
}

export default ReferencePage
