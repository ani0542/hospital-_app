import React from 'react'
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
import circleicon from "../../assets/circleicon.png"
import NavbarDropDown from '../Hospital/NavbarDropDown'   
import { Form } from 'semantic-ui-react'
import { times } from "lodash";

const SIZE = [
    { key: "Bangalore", value: "Bangalore", text: "Bangalore", },
    { key: "Hyderabad", value: "Hyderabad", text: "Hyderabad", },
    { key: "Pune", value: "Pune", text: "Pune", },
];

function AllocatequotaPage() {
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
                              <p className='vaccination-center-f-allocate mt-3'><span className='vaccination_center_allocate'>Allocates quota for vaccines for</span> "Bengaluru Urban"</p>
                              <div className='welcome_text_allocate'>
                                      <div class="flex-container">
                                        <div>
                                            <span>COVISHIELD</span>
                                        </div>
                                        <div>
                                             <span>COVAXIN</span>
                                        </div>
                                        <div>
                                              <span>SPUTNIK V</span>
                                        </div>  
                                    </div>
                                    <hr className='hr_allocate'/>

                                    <div class="flex-container-inside">
                                        <div>
                                             <span className='container_inner_fields'>Priority order</span>
                                             <div className='inner_fields_no mt-5'>
                                                 {/* <span className='reactangle_inner_no'> <span className='reactangle_inner_inside_no '>1</span></span>
                                                 <span className='reactangle_inner_no mt-2'> <span className='reactangle_inner_inside_no '>2</span></span>
                                                 <span className='reactangle_inner_no mt-2'> <span className='reactangle_inner_inside_no '>3</span></span>
                                                 <span className='reactangle_inner_no mt-2'> <span className='reactangle_inner_inside_no '>4</span></span>
                                                 <span className='reactangle_inner_no mt-2'> <span className='reactangle_inner_inside_no '>5</span></span> */}
                                                
                                                 { times( 5, num => (

                                                       <>
                                                           <span className='reactangle_inner_no'> <span className='reactangle_inner_inside_no '>{num+1}</span></span>
                                                       </>
                                                     ) ) }
                                             </div>
                                             
                                        </div>
                                        <div>
                                             <span className='container_inner_fields'>
                                                        Category name 
                                             </span>
                                             <div className='inner_fields_no_form mt-4'>
                                                 { times( 5, num => (
                                                          <>
                                                                  <Form validate="false" size="large" className='pt-3 form_contin'>
                                                                    <Form.Select
                                                                        // label="Projects"
                                                                        name="module"
                                                                        // fluid
                                                                        required
                                                                        search
                                                                        selection
                                                                        placeholder="Select Hospitals"
                                                                        options={ SIZE }
                                                                        // onChange={ ( e, ed ) => onChangeHandler( e, ed, "pid" ) }
                                                                        />
                                                                  </Form> 
                                                          </>
                                                      ) ) }
                                             </div>
                                             
                                        </div>
                                        <div>
                                            <span  className='container_inner_fields_extra'>Quota of Vaccine</span>
                                        </div>
                                        <div>
                                            <span  className='container_inner_fields_extra'>COVISHIELD</span>
                                        </div>  
                                    </div>
                              </div>
                      </div>
              </div>
        </>
    )
}

export default AllocatequotaPage
