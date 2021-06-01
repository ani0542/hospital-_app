import React from 'react'
import kelly from "../../assets/23.jpg" 
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
import user from "../../assets/user.png" 
import { Link } from 'react-router-dom'


function Hospital() {
    return (
        <>
        {/* //my-4 mx-5 */}
            <section className='Form'>
                  
                  {/* //container */}
                    <div className='container-fluid'>
                            <div className='row no-gutters'>
                                  <div className='col-lg-7 '>
                                       <img src={kelly} alt='error' className='img-fluid imgs'/>
                                  </div>
                                  <div className='col-lg-5 px-5 pt-5 text-center my-auto'>
                                        <h1 className='font-weight-bold py-3'>
                                              <img src={governmebticon} alt='error'/>
                                        </h1>
                                        <h4>
                                                <img src={cowinicon}  alt='error'/>
                                        </h4>
                                           <form className='d-flex flex-column'>
                                                  <div className='form-row mt-2'>
                                                        <div className='col-lg-7'>
                                                           <input 
                                                                type="tel"
                                                                placeholder='Phone no'
                                                                required
                                                                className='form-control hospitals my-3 p-3 mx-5'
                                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                            />
                                                        </div>
                                                  </div>
                                                  <div className='form-row'>
                                                        <div className='col-lg-7'>
                                                              <Link to='/session'> <button className='btn1 mx-5'>SUBMIT</button></Link>
                                                        </div>
                                                  </div>
                                           </form>
                                  </div>
                            </div>
                    </div>
            </section>
        </>
    )
}

export default Hospital




