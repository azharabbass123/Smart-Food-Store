import './LoginStyles.css'
import React from 'react'

 const Login = () => {
  return (
    <div className='login-container'>
        <form>
            <h2>Wellcome!</h2>
            <input type='email' name='email' placeholder='enter your email' />
            <input type='password' name='password' placeholder='enter your password' />
            <button className='btn-login'>Log in</button>
            <button className='btn-signup'>Sign up</button>

        </form>
    </div>
  )
}
export default Login