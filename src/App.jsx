import './css/style.css'
import { Route, Routes } from "react-router-dom";



import Home from './pages/Home-page/Homepage.component'
import FilterAndSearch from './pages/Filter-Search/Filter-Search.components'
import RestaurantPage from '../src/pages/restaurantPage/RestaurantPage.component'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quick-search/:meal_id' element={<FilterAndSearch/>}/>
        <Route path='/restaurant/:id' element={<RestaurantPage/>}/>



      </Routes>
    </div>
  )
}

export default App
