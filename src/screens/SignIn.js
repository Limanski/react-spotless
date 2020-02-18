import React from 'react'

import SignInForm from '../components/auth/SignInForm'

function SignIn(props) {
    return (
        <div>
            <SignInForm {...props}/>
        </div>
    )
}

export default SignIn
