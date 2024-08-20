import React, { useEffect, useState } from 'react'
import { getRandomUser } from './components/Api/Fetch'
import UserCard from './components/UserCard'

const App = () => {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]))
  }, [])
  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]))
  }
  return (
    <>
     {userData && <UserCard data={userData} />}
     <button className='btn' onClick={refresh}>Refresh User</button>
    </>
  )
}

export default App
