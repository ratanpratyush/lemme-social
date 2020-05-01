import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div id="parent">
            <h1 align="center" style={{fontFamily:"TimesNewRoman"}}>Login</h1>
            <div>
            <form action="/action_page.php" method="get" onSubmit= {alert("You are submitting this Login Form" )}> 
                <div class="imgcontainer">
                    <img src={require('./img_avatar2.png')} alt="Avatar" class="avatar" align="center"/>
                </div>

                <div class="container">
                    <label for="Email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="Email" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
        
                    <button align="center" type="submit">Login</button><br />
                </div>
            </form>

            </div>
        </div>
        
    );
}

export default Login;