import { ThemeProvider } from './context/ThemeModeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Navbar from './components/Navbar'
import InitialPage from './pages/InitialPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
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
