import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Portofolio from './pages/Portofolio'
import Project1 from './components/project/lpkyukimaga'
import Project2 from './components/project/mitratani'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/portofolio' element={<Portofolio/>}/>
        <Route path='/project1' element={<Project1/>}/>
        <Route path='/project2' element={<Project2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
