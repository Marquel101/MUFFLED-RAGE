import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({user}) {
    return (
        <>
            <div className="nav__space">
                <div className="title">
                <h1 className="muffled">MUFFLED </h1>
                <h1 className="rage">  RAGE</h1>
                </div>
                <nav className='nav__links'>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>HOME</Link >
                    <Link to="/feed" style={{ color: 'inherit', textDecoration: 'inherit'}}>FEED</Link>
                    <Link to="myrage" style={{ color: 'inherit', textDecoration: 'inherit'}}><span>MY</span> RAGE</Link>
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}><span>JOIN</span> US</Link>
                </nav>
            </div>
        </>
    )
}
