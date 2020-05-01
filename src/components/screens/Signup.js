import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h1 align="center" style={{fontFamily:"TimesNewRoman"}}>Signup</h1>
            <div>
                <form action="/action_page.php" method="post" onSubmitCapture = {alert("The account is created.")}>
                    <div className="container">
                        <p>Please fill this form to create an account.</p>
                        <hr />

                        <label for="FName"><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" name="FName" required />

                        <label for="LName"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" name="LName" required />

                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                        <div className="clearfix">
                        <button type="submit" className="signupbtn" >Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div> 
    );
}

export default SignUp;