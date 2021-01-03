import React, { Component } from 'react';
import { Router, Route, Link, useHistory  } from 'react-router-dom'
import App from '../App'
import './Login.css'
import phone from '../assets/sign-in/phone.png'
import welcome from '../assets/sign-in/welcome.png'
import name from '../assets/sign-in/names.png'
import signInborder from '../assets/sign-in/Rectangle_8.png'
import login from '../assets/sign-in/log_in.png'
import forgot from '../assets/sign-in/forgot_password.png'
import email from '../assets/sign-in/E-mail.png'
import password from '../assets/sign-in/Password.png'
import emailBox from '../assets/sign-in//email_box.png'
import passwordField from '../assets/sign-in/password_field.png'
import signIn from '../assets/sign-in/Sign_in.png'
import none from '../assets/sign-in/none.png'
import Dashboard from '../dashboard/Dashboard';
class Login extends Component {
    render() {
        return (
            <div className="main-page">
                  
            </div>
            
        )
    }
}
class Main extends Component {
    render() {
        return (
            <div>
                <Login />
                <Background />
                <Welcome />
                <SignBox />
                <LoginButton/>
                
            </div>
            
        )
    }
}

class Background extends Component {
    render() {
        return(
            <div className="phone">
                    <img src= {phone} alt = "null"/>
            </div>
        )
        
    }
}
class Welcome extends Component{
    render() {
        return(
            <div className="welcome">
                    <img src={welcome} alt = "null"/>
            </div>
        )
        
    }
}
class SignBox extends Component{
    render() {
        return(

            <div>
                <div className="signInBorder">
                    <img src={signInborder} alt = "null"/>
                </div>
                <div className="forgot">
                    < img src={forgot} alt = "null"/>
                </div>
                <div className="email">
                <img src={email} alt = "null"/>
                </div>
                <div className="password">
                    <img src={password} alt = "null"/>
                </div>
                <div className="emailBox">
                    <img src={emailBox} alt = "null"/>
                </div>
                <div className="passwordField">
                    <img src={passwordField} alt = "null"/>
                </div>
                <div className="signIn">
                    <img src={signIn} alt = "null"/>
                </div>
                
                <div className="none">
                    <img src={none} alt = "null"/>
                </div>
            </div>
            

        )
        
    }
}

class LoginButton extends Component {
    
    render(){
        return(
            
                <div className="LogIn">
                    
                    <a href="/dashboard">
                        <img src={login} alt = "null"/>
                    </a>
                </div>
            
            
        )
    }
   
}


export default Main;