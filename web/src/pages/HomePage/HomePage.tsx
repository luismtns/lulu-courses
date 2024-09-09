import { useAuth } from 'src/auth';

import { Metadata } from '@redwoodjs/web';

const HomePage = () => {

  const { isAuthenticated, signUp } = useAuth()

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>Autenticado: <b>{isAuthenticated.toString()}</b></p>
      <br/>
      <button
        onClick={()=>{
          signUp()
        }}
        >
        Sign Up
      </button>
    </>
  )
}

export default HomePage
