import React, { useState } from 'react'
import '../../styles.css'
import kelly from "../../assets/23.jpg"
import governmebticon from "../../assets/govlogo.png"
import cowinicon from "../../assets/cowiniconsmall.png"
import { Link } from 'react-router-dom'


function Hospital() {
      const [showOtp, toggleOtp] = useState(false)
      return (
            <>
                  <div className="container-fluid">
                        <div className="row">
                              <div className="col-md-6 p-0 ">
                                    <img className="img-fluid image-left-hospital" src={kelly} alt="" />
                              </div>
                              {
                                    !showOtp ?
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
                                                                        type="tel"
                                                                        placeholder='Phone no'
                                                                        required
                                                                        className='form-control hospital-id'
                                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                  />
                                                            </div>
                                                      </div>
                                                      <div className="row mx-5">
                                                            <div className="col-12 text-center">
                                                                  <button className='login-btn' onClick={() => toggleOtp(true)}>LOGIN</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          : <div className="col-md-6 text-center otp-container my-auto">
                                                <h1> Enter OTP </h1>
                                                <h4> Please enter the OTP you have received </h4>
                                                <div class="d-flex justify-content-center align-items-center container">
                                                      <div class="card card-otp py-1 px-3">

                                                            <div class="d-flex flex-row">
                                                                  <input type="text" class="form-control form-control-otp" autofocus="" />
                                                                  <input type="text" class="form-control form-control-otp" />
                                                                  <input type="text" class="form-control form-control-otp" />
                                                                  <input type="text" class="form-control form-control-otp" />
                                                                  <input type="text" class="form-control form-control-otp" />
                                                                  <input type="text" class="form-control form-control-otp" />
                                                            </div>
                                                            {/* <div class="text-center mt-5"><span class="d-block mobile-text">Don't receive the code?</span><span class="font-weight-bold text-danger cursor">Resend</span></div> */}
                                                      </div>
                                                </div>
                                                <div className="col-12 text-center otp-sign-in">
                                                      <Link to='/login'> <button className='login-btn'>SIGN IN</button></Link>
                                                </div>
                                          </div>
                              }
                        </div>
                  </div>
            </>
      )
}

export default Hospital




