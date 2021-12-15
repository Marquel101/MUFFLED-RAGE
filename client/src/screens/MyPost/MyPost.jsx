 import React from 'react'
import Layout from '../../components/layouts/Layout'
 
 export default function MyPost({user, handleLogout}) {
     return (
         <Layout user= {user} handleLogout={handleLogout}>
         <div>
             MY POST
         </div>
         </Layout>
     )
 }
 