import React from 'react'
import { useState } from 'react'
import Layout from '../../components/layouts/Layout'
import { postPost } from '../../services/posts'


export default function Create({user, handleLogout, handleCreate }) {

    const [formData, setFormData] = useState({
        name: ''
    })
    const {name}= formData

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
            CREATE
            <form autoComplete="off" onSubmit={(e) => {
                e.preventDefault()
                handleCreate(formData)
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
