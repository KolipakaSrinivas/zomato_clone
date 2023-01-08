import './css/style.css'


import Home from './pages/Home-page/Homepage.component'
import MenuItems from './pages/MenuI-tems/MenuItems.components'



import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menuitems' element={<MenuItems/>}/>

      </Routes>
      
    </div>
  )
}

export default App
