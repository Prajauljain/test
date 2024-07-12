import React from 'react'
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div>
      Home page
      <Link to='/login' >
      <button >Login</button>
      </Link>
      <Link to='/signup' >
      <button>SignUp</button>
      </Link>
      <h1>I Am developer</h1>

    </div>
  )
}

export default Home
