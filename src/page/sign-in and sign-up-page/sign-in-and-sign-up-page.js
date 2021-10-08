import React from "react";
import Signin from "../../component/Signin/signin";

import SignUp from "../../component/Signup-component/signup-component";

import './sign-in-and-sign-up-page.styles.scss'

const SignInAndSignUpPage = () =>(
    <div className={'sign-in-and-sign-up'}>
        <Signin/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage