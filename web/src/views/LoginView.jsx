import React from 'react'
// import LoginForm from '../Inputs/LoginForm'
import GoogleLogin from 'react-google-login'
import { onUserLogin } from '../Services/apiService'
import { useNavigate } from 'react-router-dom'

const LoginView = () => {
    const navigate = useNavigate()
    const handleLogin = async googleData => {
        const user = await onUserLogin(googleData)
        if (user.status == 200) {
            navigate('/secure', { state: user.data })
        }
    }

    return (
        <div className="container">
            <div className="row">
                <GoogleLogin
                    clientId="147626009254-hot641jv249asacll1am10qn61np3t0b.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
                {/* <LoginForm /> */}
            </div>
        </div>
    )
}

export default LoginView
