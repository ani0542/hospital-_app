import React from 'react'
import '../../styles.css'
import kelly from "../../assets/23.jpg" 
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
import user from "../../assets/user.png" 
import { Link } from 'react-router-dom'


function Hospital() {
    return (
        <>
        {/* //my-4 mx-5 */}
            {/* <section className='Form'>
                  
                  //container
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
            </section> */}
            <div className="container-fluid">
                  <div className="row">
                        <div className="col-md-6 p-0 ">
                              <img className="img-fluid image-left-hospital" src={kelly} alt="" />
                        </div>
                        <div className="col-md-6 login-form-container">
                              <div className="container align-items-center">
                                    <div className="row justify-content-center my-3">
                                          <img className="img-fluid government-emblem" src={governmebticon} alt="" />
                                    </div>
                                    <div className="row justify-content-center my-3">
                                          <img src={cowinicon} alt="" className="img-fluid cowin-icon" />
                                    </div>
                                    <div className="row my-3 justify-content-center mx-5">
                                          <div className="col-12 px-10 my-2 input-field-container">
                                                <input 
                                                      type="text" 
                                                      className="form-control hospital-id" 
                                                      placeholder="Hospital ID" 
                                                />
                                                    {/* <input
                                                          type="tel"
                                                          placeholder='Phone no'
                                                          required
                                                          className='form-control hospitals my-3 p-3'
                                                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                    /> */}
                                          </div>
                                              <div className="col-12 px-10 my-2">
                                                    <input
                                                          type="text"
                                                          className="form-control hospital-id"
                                                          placeholder="Hospital ID"
                                                    />
                                                {/* <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Hospital ID"
                                                /> */}
                                                    {/* <input
                                                          type="tel"
                                                          placeholder='Password'
                                                          required
                                                          className='form-control hospitals my-3 p-3'
                                                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                    /> */}
                                          </div>
                                    </div>
                                    <div className="row mx-5">
                                          <div className="col-12 text-center">
                                                <Link to='/session'> <button className='login-btn'>LOGIN</button></Link>
                                          </div>
                                          {/* <div className='form-row'>
                                                <div className='col-lg-7'>
                                                </div>
                                          </div> */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
        </>
    )
}

export default Hospital




