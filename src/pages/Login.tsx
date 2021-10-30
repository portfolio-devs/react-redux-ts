import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [name, setName] = useState('')
  const [classUser, setClassUser] = useState('')

  const login = () => {
    sessionStorage.setItem('logged', JSON.stringify({
      userName: name,
      userClass: classUser
    }))
  }

  const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const classChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClassUser(e.target.value)
  }

  console.log('login')
  return (
    <div>
      Login page
      <button onClick={() => login()}>Login</button>
      <label htmlFor="userName">User name</label>
      <input onChange={(e) => nameChange(e)} id="userName" type="text" />
      <label htmlFor="userName">Class</label>
      <input onChange={(e) => classChange(e)} id="userClass" type="text" />
      <Link to='/register'></Link>
    </div>
  )
}

export default Login
