import React from 'react'
import Layout from '../../components/layouts/Layout'

export default function Create({user, handleLogout}) {
    return (
        <Layout user= {user} handleLogout={handleLogout}>
        <div>
            CREATE
        </div>
        </Layout>
    )
}
