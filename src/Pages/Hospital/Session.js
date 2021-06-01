import React from 'react'
import kelly from "../../assets/23.jpg" 
import governmebticon from "../../assets/govlogo.png" 
import cowinicon from "../../assets/cowiniconsmall.png" 
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
             <section className='Form'>
                 <div className='row no-gutters'>
                                   <div className='col-lg-7 '>
                                       <img src={kelly} alt='error' className='img-fluid imgs'/>
                                  </div>
                                  <div className='col-lg-5 px-5 pt-5  my-auto'>
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
                </div>
             </section>
        </>
    )
}

export default Session
