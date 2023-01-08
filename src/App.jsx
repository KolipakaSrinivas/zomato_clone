import './css/style.css'


import Home from './pages/Home-page/Homepage.component'
import MenuItems from './pages/MenuI-tems/MenuItems.components'
import Restaurant from './components/Restaurant/Restaurant.component'



import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quick-search/:meal_id' element={<MenuItems/>}/>
        <Route path='/Restaurant/:id' element={<Restaurant/>}/>

      </Routes>
      
    </div>
  )
}

export default App
