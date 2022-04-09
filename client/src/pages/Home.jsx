import React from 'react'
import Log from "../components/authentification/IndexLog";


const Home = () => {
  return (
    <div>Home page
      <Log  signin={false} signup={true} />
    </div>
  )
}

export default Home