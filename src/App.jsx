import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'

const App = () => {
  const [formData, setFormData] = useState({})
  const [user, setUser] = useState([])
  const [toggle, setToggle] = useState(false)
  const [error, setError] = useState({
    image: "",
    name: "",
    subName: "",
    designation: "",
  });

  return (
    <div>
      <Navbar setToggle={setToggle} />
      {toggle ? <UserForm setToggle={setToggle} formData={formData} setFormData={setFormData} user={user} setUser={setUser} error={error} setError={setError} /> : <UserCard user={user} />}

    </div>
  )
}

export default App