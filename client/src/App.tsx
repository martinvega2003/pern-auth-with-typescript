import { ThemeProvider } from './context/ThemeModeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import InitialPage from './pages/InitialPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<InitialPage />} />
          <Route path='/about' element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </ ThemeProvider>
  )
}

export default App
