import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({user, handleLogout}) {
    return (
        <>
            <div className="nav__space">
                <div className="title">
                <h1 className="muffled">MUFFLED </h1>
                <h1 className="rage">  RAGE</h1>
                </div>
                <nav className='nav__links'>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>HOME</Link >
                    <Link to="/posts" style={{ color: 'inherit', textDecoration: 'inherit'}}>FEED</Link>
                    <Link to={user ? "/myrage" : "/login"}style={{ color: 'inherit', textDecoration: 'inherit'}}><span>MY</span> RAGE</Link>
                    {user ? <Link to="/" onClick={handleLogout}style={{ color: 'inherit', textDecoration: 'inherit'}}><span>LOG</span>OUT</Link>:
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}><span>JOIN</span> US</Link> }
                </nav>
            </div>
        </>
    )
}
 