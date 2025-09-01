import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';

const RegisterPage: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className='w-screen h-fit lg:h-screen flex justify-center items-center'>
      <div 
        className='w-fit aspect-square 
        bg-transparent sm:bg-white sm:dark:bg-gray-900 px-16 py-4 flex 
        flex-col justify-center items-start rounded-2xl sm:shadow-lg 
        text-center sm:border sm:border-gray-300 sm:dark:border-gray-700'
      >
        <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200'>
          Welcome to the MERN Auth App!
        </h1>

        <p className='text-sm sm:text-md md:text-lg mb-6 text-gray-600 dark:text-gray-400'>
          Register or <Button variant='link' onClick={() => navigate('/login')}>Login</Button> if you already have an account
        </p>

        <input 
          type="text" 
          placeholder='Username'
          className="w-full px-8 py-4 mb-4 dark:text-white text-sm sm:text-md md:text-lg placeholder:text-gray-400 border border-cyan-800 dark:border-cyan-200 rounded-full outline-0" 
        />

        <input 
          type="email" 
          placeholder='Email'
          className="w-full px-8 py-4 mb-4 dark:text-white text-sm sm:text-md md:text-lg placeholder:text-gray-400 border border-cyan-800 dark:border-cyan-200 rounded-full outline-0" 
        />

        <input 
          type="password" 
          placeholder='Password'
          className="w-full px-8 py-4 mb-4 dark:text-white text-sm sm:text-md md:text-lg placeholder:text-gray-400 border border-cyan-800 dark:border-cyan-200 rounded-full outline-0" 
        />

        <input 
          type="password" 
          placeholder='Confirm Password'
          className="w-full px-8 py-4 mb-4 dark:text-white text-sm sm:text-md md:text-lg placeholder:text-gray-400 border border-cyan-800 dark:border-cyan-200 rounded-full outline-0" 
        />

        <Button 
          onClick={() => alert('Register functionality not implemented yet')} 
          variant='gradient' 
          textColor='text-white'
          gradientFrom='from-cyan-300 dark:from-cyan-500' 
          gradientTo='to-cyan-700 dark:to-cyan-900' 
          className='mb-4 w-full py-4 rounded-full'
          >
          Register
        </Button>

      </div>
    </div>
  )
}

export default RegisterPage;
