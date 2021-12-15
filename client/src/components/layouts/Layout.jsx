import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}
