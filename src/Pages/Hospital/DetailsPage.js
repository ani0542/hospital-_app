import React,{useEffect, useState} from 'react'
import Header from '../../components/common/header/header'
import biguser from "../../assets/biguser.png"
import API from '../../Services/api.service'
import swal from 'sweetalert'

function DetailsPage(props) {
     
const [details,setDetails]=useState('')

async function getReferenceDetails(refid)
{
                      try{
                          const reference_details=await API.get(`cowinka/cowinref/${refid}`,{
                              headers: {
                                'session-token': '35e54318-c93b-44f8-8e0e-862c81962f57'
                               }})
                              console.log(reference_details)
                         if(reference_details.data.result !== undefined)
                         {
                            setDetails(reference_details.data.result)
                            
                         }
                         else
                         {
                            swal("Error!", "User not found", "error");
                         }
                        
                      }
                      catch(e)
                      {
                          
                          console.log(e)
                      }
}

       useEffect(()=>{
              if(props.match.params.ref_id !== undefined)
              {
                  async function fetchReference(){
                     await getReferenceDetails(props.match.params.ref_id)
                  }
                  fetchReference()
                  
              }
            
          },[props.match.params])

          const updateVaccination=async ()=>{
                const vaccinated=await API.post('cowinka/register/vaccinated',{
                     beneficiary_id:details.beneficiary_id
                 },{
                     headers: {
                       'session-token': '35e54318-c93b-44f8-8e0e-862c81962f57'
                      }})
                     await getReferenceDetails(details.cowin_ref_id)
                      swal("Success", "vaccination status updated", "success");
          }
    return (
       <>
       <Header />
       {
              details !== ""? <div className="container modified_container mt-5">
              <h1 style={{"textAlign":"center"}}>Reference id details</h1>
   
              <div className="col-md-12" style={{"float":"left"}}>
   
              <div className="col-md-5" style={{"float":"left","textAlign":"right","paddingRight":"2%"}}><img src={biguser} alt='error'/></div>
              <div className="col-md-7 pt-2" style={{"float":"left"}}>
              <div className="user_name">{details.name}</div>
              <div className="ref_id">Reference id - {details.cowin_ref_id}</div>
              </div>
   
   
              </div>
       {
                 details.status_code === 103?
                 <div style={{"textAlign":"center","float":"left"}} className="mt-5 col-md-12">
                 <div className="dose1">{details.state}</div>
              </div>:<div/>
          }
          {
                 details.status_code === 104?
                 <div style={{"textAlign":"center","float":"left"}} className="mt-5 col-md-12">
                 <div className="dose1">{details.state}</div>
              </div>:<div/>
          }
          {
              details.status_code === 105?
              <div style={{"textAlign":"center","float":"left"}} className="mt-5 col-md-12">
                 <div className="dose1">{details.state}</div>
              </div>:<div />
          }
          {
              details.status_code === 105?
              <div style={{"textAlign":"center","float":"left"}} className="mt-5 col-md-12">
                 <div className="dose1">{details.next_state}</div>
              </div>:<div />
          }
          {
               details.status_code === 104 || details.status_code === 102?  
               <div style={{"textAlign":"center","float":"left","display":"flex"}} className="mt-5 col-md-12">
                 <div className="dose2  pb-4">
                       <div className="text-dose-2 pt-4"> {details.status_code === 102?details.state:details.next_state}</div>
   
                       <div className="col-md-12 pt-2">
                             <div className="col-md-4" style={{"float":"left","color":"#1D2941","fontFamily":"Lato","fontSize":"16px","textAlign":"left","paddingLeft":"20px"}}>  Vaccine type</div>
                             <div className="col-md-6" style={{"float":"left","color":"#1D2941","fontFamily":"Lato","fontSize":"16px","textAlign":"left","fontWeight":"600"}}>  {details.vaccine_id ===2 ?"COVAXIN":"COVISHIELD"}</div>
                        </div>
                        <div className="col-md-12">
                             <div className="col-md-4" style={{"float":"left","textAlign":"left","paddingLeft":"20px"}}> Location</div>
                             <div className="col-md-6" style={{"float":"left","textAlign":"left","fontWeight":"600"}}> {details.status_code === 102?details.location1.name:details.location2.name}</div>
                        </div>
                        
                 </div>
              </div>:<div />
          }
   
             
   
              <div style={{"textAlign":"center","float":"left","width":"100%"}} className="mt-5">
                  {
                        details.status_code === 102? 
                        <input type="button" onClick={updateVaccination} value="Click if dose 1 is completed" className='reference_button' />:
                        details.status_code === 104?
                        <input type="button" onClick={updateVaccination} value="Click if dose 2 is completed" className='reference_button' />:<div />
                  } 
               </div>
          </div>:<div />
       }
      
       </>
    )
}

export default DetailsPage
