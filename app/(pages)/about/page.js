import Link from 'next/link'
import React from 'react'



const page = () => {
  const users = [{id:1,name:'Ran vijay bulbheer'},{id: 2 ,name:'Arjun Reddy'},{id: 3,name:'Adithya Varma'},{id: 4,name:'Kabir singh'}]
  return (
    <div>About
      <h1>users</h1>
      <ol> {users.map((user)=>(
       <Link  key={user.id}  href={`/dashboard/user/${user.id}`} > <li className='p-5 m-5 border border-gray-200' >User : {user.id}</li></Link>
      ))}
      </ol>
     
    </div>

  )
}

export default page