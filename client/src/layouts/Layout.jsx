import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
    return (
        <div>
            <header>
                <h1>Test</h1>
                <Link>Login/Register</Link>
            </header>
            {props.children}
        </div>
    )
}
