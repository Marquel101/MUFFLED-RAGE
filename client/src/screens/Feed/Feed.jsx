import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layouts/Layout'
import { getPosts } from '../../services/posts'



export default function Feed({user, handleLogout, feed, handleDelete }) {
    
console.log(feed)
    return (
        <>
         <Layout user= {user} handleLogout={handleLogout}>
        <div className="blogs">
            {feed.map((post) => (
                <div>
                    <h4>{post.name}</h4>
                    <button>EDIT</button>
                    <button onClick={()=> handleDelete(post.id)}>DELETE</button>
                </div>
            ))}
        </div>
        <Link to={user ? '/newRage' : '/login'}>NEW</Link>
        </Layout>
        </>
    )
}
