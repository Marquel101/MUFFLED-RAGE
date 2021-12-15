import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../services/posts'


export default function Feed() {
    const [feed, setFeed] = useState([])
    useEffect(() => {
    const fetchFeed = async () => {
        const posts = await getPosts()
        setFeed(posts)
    }
    fetchFeed()
}, [])

    return (
        <>
        <div>
            {feed.map((blog) => (
                <h4>{blog.name}</h4>
            ))}
        </div>
        <Link to='/addRage'>NEW</Link>
        </>
    )
}
