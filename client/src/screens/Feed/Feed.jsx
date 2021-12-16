import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layouts/Layout'
import { getPosts } from '../../services/posts'



export default function Feed({user, handleLogout, feed}) {
    

    return (
        <>
         <Layout user= {user} handleLogout={handleLogout}>
        <div className="blogs">
            {feed.map((blog) => (
                <h4>{blog.name}</h4>
            ))}
        </div>
        <Link to={user ? '/newRage' : '/login'}>NEW</Link>
        </Layout>
        </>
    )
}
