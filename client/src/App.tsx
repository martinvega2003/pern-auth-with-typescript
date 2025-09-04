// Libraries`
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { ThemeProvider } from './context/ThemeModeContext'

// Pages and Components
import Navbar from './components/Navbar'
import InitialPage from './pages/InitialPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <Routes>

          {/* Initial And Auth Related Pages */ }
          <Route path='/' element={<InitialPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ ThemeProvider>
  )
}

export default App
