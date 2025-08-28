import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';

const InitialPage: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-zinc-200 dark:bg-gray-800 w-screen h-screen flex justify-center items-center'>
      <div 
        className='w-full sm:w-2/3 md:w-1/2 lg:w-2/5 aspect-square 
        bg-transparent sm:bg-white sm:dark:bg-gray-900 p-8 flex 
        flex-col justify-start items-center rounded-2xl sm:shadow-lg 
        text-center sm:border sm:border-gray-300 sm:dark:border-gray-700'
      >
        <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200'>
          Welcome to the MERN Auth App!
        </h1>
        <p className='text-sm sm:text-md md:text-lg mb-8 text-gray-600 dark:text-gray-400'>
          Create an Account or Login if you have one
        </p>
        <Button onClick={() => navigate('/register')} variant='filled' className='mb-4 w-full sm:w-3/4 py-4 rounded-full'>
          Register
        </Button>
        <Button onClick={() => navigate('/login')} variant='outlined' className='w-full sm:w-3/4 py-4 rounded-full'>
          Login
        </Button>
      </div>
    </div>
  )
}

export default InitialPage;
