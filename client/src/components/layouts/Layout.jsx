import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Layout(props) {
    return (
        <>
        <Navbar user={props.user} handleLogout={props.handleLogout}/>
            <div>
                {props.children}
            </div>
        </>
    )
}
