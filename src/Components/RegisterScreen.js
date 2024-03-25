import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import "../StyleSheet/registerScreen.css"

import axios from "axios";

const RegisterScreen = () => {

    const [registerPopup,showRegisterPopup]=useState("hide")

    const [popupMsg,setPopupMsg]=useState("")
    
    const registerAlertPopup=()=>{
        showRegisterPopup("showRegisterPopup")
        setTimeout(()=>showRegisterPopup("hide"),3000)
    }
    
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, confirmPassword] = useState('')

    const registerHandler = () => {
        const creds = { 
            email: email,
            username: username,
            password: password,
            password_confirmation: password_confirmation
        };
        axios
            .post('/auth/signup', creds)
            .then((res) => {
                if (res.data) {
                    setPopupMsg(JSON.stringify(res.data))
                    registerAlertPopup()

                    console.log(res.data)
                }
            })
            .catch((err) => {
                setPopupMsg(JSON.stringify(err.response.data.errors))
                    registerAlertPopup()
                switch(err.response.status) {
                    case 400:
                        console.log(err.response.data.errors);
                        break;
                    case 404:
                        console.log(err.response.data.errors);
                        break;
                    case 422:
                        console.log(err.response.data.errors);
                        break;
                    case 500:
                        console.log(err.response.data.errors);
                        break;
                    default:
                        console.log(err.response.data.errors);
                        break;
                }
            });
    }

  return (
    <div className='registerContainer'>
        <div className='registerCard'>
            <h1 className='formTitle'>Register to Func Fit</h1>
            <input onChange={(event)=>{setEmail(event.target.value)}} type='email' placeholder="email" />
            <input onChange={(event)=>{setUsername(event.target.value)}} type='text' placeholder="username" />
            <input onChange={(event)=>{setPassword(event.target.value)}} type='password' placeholder="password" />
            <input onChange={(event)=>{confirmPassword(event.target.value)}} type='password' placeholder="confirm password" />

            <div className="registerButton" onClick={()=>registerHandler()}>register</div>

            <div classname="accountMethod">
                <a className="dText"> Alreay have an account?  </a>
                <Link to="/login">
                    <a className="rText"> login here</a>
                </Link>
            </div>
            <div className={registerPopup} >
                <h1>{popupMsg}</h1>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen