import React, { useEffect, useState } from 'react'
import Session from './Session'
import '../../styles.css'
import kelly from "../../assets/23.jpg"
import governmebticon from "../../assets/govlogo.png"
import cowinicon from "../../assets/cowiniconsmall.png"
import {  useHistory } from 'react-router-dom'
import OtpInput from "react-otp-input";
import axios from 'axios';
import { confirmOtp } from '../../Services/login.service';
import { fetchAccessControl } from "../../redux/action/user/user";
import { useDispatch,connect } from 'react-redux'
import { logins } from "../../redux/action/login.actions";
import sha256 from 'crypto-js/sha256';
import API from '../../Services/api.service'

function Hospital({access, fetchAccessControl}) {


      //state--------------------
      const [showOtp, toggleOtp] = useState(false)
      const [loader,showLoader]=useState(false)
      const [OTP, setOTP] = useState("");
      const [phone,setPhone] = useState('')
      const [logintxn,setLoginTxn] = useState([])
      const [isLoading,setIsLoading] = useState(true)

      const history = useHistory();
      const dispatch = useDispatch();
      //handler--------------------
      const handleChange=(e)=>{
            setPhone(e.target.value)
      }

      const handleOtp = otp => setOTP(otp);
    
      const clear=()=>{
            setOTP("")
        }

      //login request
      const handleLogin=()=>{
           
            if(phone.length>9 && phone.length<11)
            {
                  dispatch(logins({ mobile: phone }));
                  toggleOtp(true)
                  //history.push(`/session/${phone}`)
            }
      
      }
      
      const changeNumber=()=>{
            
            toggleOtp(false)
          }
      const resendOtp=()=>{
            dispatch(logins({ mobile: phone }));
      }

      const confirmOtpClick = async () => {
            const hashDigest = sha256(OTP.toString());
            try {
                  showLoader(true)
                let session = await confirmOtp({
                    "otp": hashDigest.toString(),
                    "txnId": "4c150581-c3d7-11eb-b03d-df5124d3c49a"
                });
                showLoader(false)
                localStorage.setItem('session-token', session?.data?.['session-token'])
                await fetchAccessControl();
            } catch (err) {
                console.log(err)
                showLoader(false)
                alert('err')
            }
        }
        const redirectAction = () => {
            if (access) {
                if(access.manage_verify){
                    history.push("/");
                }else{
                    history.push("/vaccine-center");
                }
            }
        }
       
            
        
    
        useEffect(() => {
            redirectAction();
        }, [access]);
      return (
            <>
                  <div className="container-fluid">
                        <div className="row">
                              <div className="col-md-6 p-0 ">
                                    <img className="img-fluid image-left-hospital" src={kelly} alt="" />
                              </div>
                              {
                                    showOtp?
                                    <Session OTP={OTP} confirmOtpClick={confirmOtpClick} mobile={phone} changeNumber={changeNumber} handleOtp={handleOtp} clear={clear} resendOtp={resendOtp}/>:
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
                                                                 
                                                                  <button className='login-btn' onClick={handleLogin}>{loader?'LOGIN...':'LOGIN'}</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div> 
                                                
                              }       
                        </div>
                  </div>
            </>
      )
}

const mapStateToProps = ({ userAccess: { access } }) => {
      return { access: access };
  };
  const mapDispatchToProps = (dispatch) => ({
      fetchAccessControl: () => dispatch(fetchAccessControl()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Hospital);




