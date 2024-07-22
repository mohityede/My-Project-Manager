import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import TaskDetails from './pages/TaskDetails/TaskDetails'
import Subscription from './pages/Subscription/Subscription'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/upgrade' element={<Subscription/>} />
        <Route path='/project/:id' element={<ProjectDetails/>} />
        <Route path="/project/:projectId/task/:taskId" element={<TaskDetails/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
