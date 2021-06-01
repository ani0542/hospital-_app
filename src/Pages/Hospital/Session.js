import React from 'react'
import kelly from "../../assets/23.jpg" 
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
import '../../styles.css'
import { Link } from 'react-router-dom'
import OtpInput from "react-otp-input";

function Session() {

    // const [OTP, setOTP] = useState("");

    // const handleChange = session_id => setOTP(session_id);

    // const handleClicked = () => {
    //     // dispatch(login({ sessionId: OTP }));
    // };


    return (
        <>
            {/* <div className="container-fluid">
                <div className='col-md-6 p-0'>
                    <img src={kelly} alt='error' className='img-fluid image-left-hospital' />
                </div>
                <div className="col-md-6 p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1> Enter Otp </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    Hello World
                </div>

            </div> */}
             <section className='Form'>
                 <div className='row no-gutters'>
                     <div className="container-fluid">
                         <div className="row">
                            <div className='col-md-6 img-container-otp'>
                                <img src={kelly} alt='error' className='img-fluid image-left-hospital' />
                            </div>
                            <div className="col-md-6 text-center otp-container my-auto">
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

                         </div>

                     </div>
                                   
                                  {/* <div className='col-md-6 px-5 pt-5  my-auto'>
                                      <div className="container">
                                          <div className="row">
                                              <h1> Enter OTP </h1>
                                                <h4>
                                                    <p className='recieved_otp'>Please enter the OTP you have recieved</p>
                                                </h4>
                                          </div>
                                            <h1 className='font-weight-bold py-3'>
                                                <h1 className='enter_otp'>Enter OTP</h1>
                                            </h1>
                                            <h4>
                                                <p className='recieved_otp'>Please enter the OTP you have recieved</p>
                                            </h4>
                                            <div className="session__otp_container">
                                                <span>
                                                    <OtpInput
                                                        // value={OTP}
                                                        // onChange={handleChange}
                                                        numInputs={6}
                                                        separator={<span>&nbsp;</span>}
                                                        isInputNum={true}
                                                        isInputSecure={true}
                                                        className='input_otp  mt-3'
                                                    />
                                                </span>


                                            </div>

                                            <span>
                                                <Link to='/login'> <button className='btn1_otp mt-5'>SIGN IN</button></Link>
                                            </span>
                                      </div>
                                            
                                  </div> */}
                </div>
             </section>
        </>
    )
}

export default Session
