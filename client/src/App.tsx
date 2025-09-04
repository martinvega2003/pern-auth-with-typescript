// Libraries`
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { ThemeProvider } from './context/ThemeModeContext'
import { AuthProvider } from './context/AuthContext'

// Pages and Components
import Navbar from './components/Navbar'
import InitialPage from './pages/InitialPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

// Routes
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './pages/Auth';

function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ToastContainer position="top-right" autoClose={3000} />
          <Navbar />
          <Routes>

            {/* Initial And Auth Related Pages */ }
            <Route path='/' element={<InitialPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />

            {/* Protected Routes */ }
            <Route
              path="/auth"
              element={
                <ProtectedRoute>
                  <Auth />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ ThemeProvider>
    </AuthProvider>
  )
}

export default App
