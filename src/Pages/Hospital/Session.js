import React, { useState, useEffect } from 'react'
import kelly from "../../assets/23.jpg"
import governmebticon from "../../assets/govlogo.png"
import cowinicon from "../../assets/cowiniconsmall.png"
import '../../styles.css'
import { useHistory } from 'react-router-dom'
import OtpInput from "react-otp-input";
import { useSelector,useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { confirmOtp } from '../../Services/login.service';
import { logins } from "../../redux/action/login.actions";
import { connect } from "react-redux";
import { fetchAccessControl } from "../../redux/action/user/user";
import { propTypes } from 'react-bootstrap/esm/Image'

function Session({OTP,confirmOtpClick,resendOtp,clear,handleOtp,changeNumber,mobile }) {
    // console.log(props.location.state)
    let history = useHistory();
    const dispatch = useDispatch();

    const txndetails = useSelector(state => state.log.configs);

    // console.log(props)

   
    const [phone,setphone]=useState("");
    const [show, setShow] = useState(false);
    const delay=30;
    useEffect(()=>{
        if(mobile !== undefined)
        {
            setphone(mobile)
        }
    },[mobile])

    useEffect(
        () => {
          let timer1 = setTimeout(() => setShow(true), delay * 1000);
    
          // this will clear Timeout
          // when component unmount like in willComponentUnmount
          // and show will not change to true
          return () => {
            clearTimeout(timer1);
          };
        },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        []
      );
   

    // const handleClicked = () => {
    //     // dispatch(login({ sessionId: OTP }));
    // }; 

   

   
    return (
       
        
           <div className="col-md-6 login-form-container">
      <div className="logain-wrap">
        <div className="logain-hdn">
          <h5>Enter OTP</h5>
          <p>Please enter the OTP you have recieved</p>
        </div>
        <div className="logain-text">
          <p>
            {phone}
            <Link href="/" onClick={changeNumber}>
              <a>Change number</a>
            </Link>
          </p>
        </div>
        <div className="enter-otp">
          <label htmlFor="#">Enter OTP</label>
          <OtpInput
            value={OTP}
            onChange={handleOtp}
            numInputs={4}
            separator={<span> </span>}
            isInputNum={true}
          />
        </div>
        <div className="logain-otp">
          <p>
            <a onClick={clear}>Clear</a>
            <div className="logain-resend">
              {show?<a disabled={show?true:false} onClick={resendOtp}>Resend Otp</a>:<span style={{"color":"#ccc"}}>Resend Otp</span>}
            </div>
          </p>
        </div>
        <div className="logain-btn">
          {/* <Link href={newPath}> */}
          <a style={{"cursor":"pointer"}} onClick={confirmOtpClick}>Sign In</a>
          {/* </Link> */}
        </div>
      </div>
    </div>
            
        
    )
}


export default Session;
