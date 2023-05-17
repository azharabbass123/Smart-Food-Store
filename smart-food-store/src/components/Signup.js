import './LoginStyles.css'
import React from 'react'

 const Signup = () => {
  return (
    <div className='login-container'>
        <form>
            <h2>Wellcome!</h2>
            <input type='text' name='fname' placeholder='first name' />
            <input type='text' name='lname' placeholder='last name' />
            <input type='email' name='email' placeholder='email' />
            <input type='phone' name='phone' placeholder='phone' />
            <input type='password' name='password' placeholder='enter your password' />
            <button className='btn-signup1'>Sign up</button>

        </form>
    </div>
  )
}
export default Signup