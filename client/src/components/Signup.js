import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import {handleRegister} from '../utils/resource'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim() && password.trim() && email.trim()) {
            console.log(email, username, password)
            setPassword("")
            setUsername("")
            setEmail("")
        }
    }

  
    return (
        <main className="signup">
            <form onSubmit={handleSubmit}className="signup__form">
                <h2 className="signup__title">Create an account</h2>
                <label htmlFor='email'>Email Address</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    name='username'
                    type='text'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='email'>Password</label>
                <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signupButton">REGISTER</button>
                <p style={{ textAlign:"center", marginTop: "30px"}}>Already have an account?
                    <Link className='link' to='/'>
                        Sign in
                    </Link>
                </p>
            </form>
        </main>
  )

}
export default Signup