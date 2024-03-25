import React,{ useState } from "react";
import { json, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import "../StyleSheet/loginScreen.css"


import axios from "axios";

const LoginScreen=(props)=>{
    

    const [ email, setEmail ] = useState('')
    const [ password, setPass ] = useState('')
    const[errMsg,setErrMsg]=useState('')

    const [ loginPopup, showLoginPopup ] = useState("hide")
    let navigate = useNavigate();
    

    const loginAlertPopup=()=>{
        showLoginPopup("showLoginPopup")
        setTimeout(()=>showLoginPopup("hide"),3000)
    }

    const loginHandler = (props) => {
        
        const creds = { 
            email: email,
            password: password
        };
        axios
            .post('/auth/signin', creds)
            .then((res) => {
                
                if (res.data) {
                    
                    if(res.status == 200){
                        console.log(res.data.success)
                        navigate('/home');
                        console.log("props",props)
                        // props.history.push("/home");
                    }
                
                }
            })
            .catch((err) => {
                setErrMsg(JSON.stringify(err.response.data.errors))
                loginAlertPopup()
                console.log("err",JSON.stringify(err.response.data.errors))
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

    return(
        <div className="loginContainer">
            <div className="loginCard">
                <h1 className="formTitle">Welcome to Func Fit</h1>
                {/* <input  type='text' placeholder="username" /> */}
                <input onChange={(event)=>{setEmail(event.target.value)}} style={{width:'60%', height:'10%'}} type='text' placeholder="email" />
                <input onChange={(event)=>{setPass(event.target.value)}} style={{width:'60%', height:'10%'}} type='password' placeholder="password" />
                {/* <Link id="RouterNavLink"  to="/home"> */}
                    <div onClick={(props)=>loginHandler(props)} className="flex justify-center align-center bg-blue-400 pt-4 pb-4 pl-8 pr-8 rounded-md">Login</div>
                {/* </Link> */}

                <div className="otherLogins">
                    <div className="google"></div>
                    <div className="meta"></div>

                </div>
                
                <div div className="accountMethod">
                <a className="dText"> Dont have an account? </a>
                <Link to="/register">
                    <a className="rText"> register here</a>
                </Link>
                </div>


                <div className={loginPopup} >
                 
                    <h1>{errMsg}</h1>

                </div>

            </div>
        </div>
    );
}

export default LoginScreen