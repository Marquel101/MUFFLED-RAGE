import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({user, handleLogout, children }) {
    return (
        <div>
            <header>
                <h1>YESSIR</h1>
                { user ? <button  onClick={handleLogout}>LOGOUT</button> :
                <Link to='/login'>Login/Register</Link>
                }
            </header>
            {children}
        </div>
    )
}
