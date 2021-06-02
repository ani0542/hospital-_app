import React, { useEffect, useState } from 'react'
import '../../styles.css'
import kelly from "../../assets/23.jpg"
import governmebticon from "../../assets/govlogo.png"
import cowinicon from "../../assets/cowiniconsmall.png"
import {  useHistory } from 'react-router-dom'
import OtpInput from "react-otp-input";
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { logins } from "../../redux/action/login.actions";
import API from '../../Services/api.service'

function Hospital() {


      //state--------------------
      const [showOtp, toggleOtp] = useState(false)
      const [phone,setPhone] = useState('')
      const [logintxn,setLoginTxn] = useState([])
      const [isLoading,setIsLoading] = useState(true)

      const history = useHistory();
      const dispatch = useDispatch();
      //handler--------------------
      const handleChange=(e)=>{
            setPhone(e.target.value)
      }


      // console.log(logintxn)


      //login request
      const handleLogin=()=>{
            // const data={
            //        mobile:phone
            // }
            // if(phone.length>9 && phone.length<11)
            // {
            // await  axios.post(`https://api.spacemonk.io/integration/auth/generatewebotp`,data)

            // https://api.spacemonk.io/integration/auth/validate-web-otp
            // .then((res)=>{
                  // console.log(res.data)
                  // setLoginTxn(res?.data)
                  // setIsLoading(false)
            // })
            // .catch((err)=>{
            //       console.log(err)
            // })
            // setPhone('')
            // history.push({
            //       pathname: "/session",
            //       state: { item: logintxn },
            // })
            // if(logintxn?.length){
            //       history.push('/session', { items: logintxn });
            // }
            if(phone.length>9 && phone.length<11)
            {
                  dispatch(logins({ mobile: phone }));
                  history.push(`/session`)
            }
      
      }
      

      return (
            <>
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
                                                                        type="tel"
                                                                        placeholder='Phone no'
                                                                        required
                                                                        className='form-control hospital-id'
                                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                        value={phone}
                                                                        onChange={handleChange}
                                                                  />
                                                            </div>
                                                      </div>
                                                      <div className="row mx-5">
                                                            <div className="col-12 text-center">
                                                                  {/* {
                                                                       logintxn?(
                                                                             <>
                                                                                    <Link
                                                                                          to={{
                                                                                                pathname: "/session",
                                                                                                state: { item: 'logintxn' },
                                                                                          }}
                                                                                    >
                                                                                       <button className='login-btn' onClick={handleLogin}>LOGIN</button>
                                                                                    </Link>
                                                                             </>
                                                                       )  :(
                                                                             <>

                                                                             </>
                                                                       )
                                                                  } */}
                                                                  <button className='login-btn' onClick={handleLogin}>LOGIN</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>        
                        </div>
                  </div>
            </>
      )
}

export default Hospital




