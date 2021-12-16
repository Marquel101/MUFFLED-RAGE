import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/layouts/Layout'

export default function Edit({user, handleLogout , feed, handleUpdate }) {
    console.log(feed)

    const [formData, setFormData] = useState({
        name: ''
        })
    const {name}= formData
    const { id } = useParams

    useEffect(()=>{
        const prefillForm = () => {
           const post = feed.find((item) => item.id == id)
           setFormData({name: post.name})
        }
       if (feed.length) prefillForm()
    },[feed, id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

   
    return (
        <Layout user= {user} handleLogout={handleLogout}>
        <div>
            Edit
            <form autoComplete="off" onSubmit={(e) => {
                e.preventDefault()
                handleUpdate(id, formData)
            }}>
                <label>
                    <input type='text' name='name' value={name}  onChange={handleChange} />
                </label>
                <button>SUBMIT</button>
            </form>
        </div>
        </Layout>
    )
}
