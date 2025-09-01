import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';

const LoginPage: React.FC = () => {

  interface LoginData {
    email: string;
    password: string;
  }

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = () => {
    // Basic validation
    if (!loginData.email || !loginData.password) {
      alert('Please fill in all fields');
      return;
    }

    alert(JSON.stringify(loginData, null, 2));
    setLoginData({
      email: '',
      password: '',
    });
    navigate('/');
  }

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
          Login or <Button variant='link' onClick={() => navigate('/register')}>Register</Button> if you don't have an account
        </p>

        <input 
          type="email" 
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={loginData.email}
          className="w-full px-8 py-4 mb-4 dark:text-white text-sm sm:text-md md:text-lg placeholder:text-gray-400 border border-green-600 dark:border-green-200 rounded-full outline-0" 
        />

        <input 
          type="password" 
          name='password'
          placeholder='Password'
          onChange={handleChange}
          value={loginData.password}
          className="w-full px-8 py-4 mb-4 dark:text-white text-sm sm:text-md md:text-lg placeholder:text-gray-400 border border-green-600 dark:border-green-200 rounded-full outline-0" 
        />

        <Button 
          onClick={handleSubmit} 
          variant='gradient' 
          textColor='text-white'
          gradientFrom='from-green-300 dark:from-green-500' 
          gradientTo='to-green-700 dark:to-green-900' 
          className='mb-4 w-full py-4 rounded-full'
          >
          Login
        </Button>

      </div>
    </div>
  )
}

export default LoginPage;
