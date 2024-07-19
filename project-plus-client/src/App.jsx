import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/project/:id' element={<ProjectDetails/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
