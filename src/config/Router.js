import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/Home/Home'

const Router = () => {
  return (
    <div>
  <BrowserRouter>
  <Routes >
 <Route path='/' element={<Home/>}/>
  </Routes>
  

  </BrowserRouter>
</div>

)
}
export default Router
