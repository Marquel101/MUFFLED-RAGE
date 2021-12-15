import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const {username, password} = formData
    const { handleLogin } = props

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }
 
    return (
        <>
        <header className="header">
            <h1>MUFFLED <span>RAGE</span></h1>
        </header>
      <div className="box">
        <section className="logincontainer">
          <div className="login__header">Login</div>
          <form onSubmit={(e)=> {
            e.preventDefault()
            handleLogin(formData)
        }} className="form">
            <div className="username">
              <label className="text__signin__1">USERNAME</label>
              <input 
                type='text' 
                name='username' 
                value={username} 
                onChange={handleChange}
                />
            </div>

            <div className="password">
              <label className="text__signin__2">Password</label>
              <input 
                type='password' 
                name='password' 
                value={password} 
                onChange={handleChange}
                />
                
            </div>
            <br></br>
            <div className="auth_buttons">
            <button type="submit">SUBMIT</button>
            <Link to='/register'><button>REGISTER</button></Link>
            </div>
          </form>
        </section>  
      </div>
      <div className="bttm__btn2"> 
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>HOME</Link>
                </div>
    </>

    )
}
